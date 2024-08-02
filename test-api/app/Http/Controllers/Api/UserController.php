<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->query('name');
        $address = $request->query('address');

        $query = User::query();

        if ($name) {
            $query->where('name', 'like', '%' . $name . '%');
        }

        if ($address) {
            $query->where('address', 'like', '%' . $address . '%');
        }

        $users = $query->latest()->get();

        return response()->json($users);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 422);
        }

        $image = $request->file('image');
        $uploadFolder = 'users';
        $image_uploaded_path = $image->store($uploadFolder, 'public');

        $uploadedImageResponse = [
            "image_name" => basename($image_uploaded_path),
            "image_url" => Storage::disk('public')->url($image_uploaded_path),
            "mime" => $image->getClientMimeType()
        ];

        $user = User::create([
            'name' => $request->input('name'),
            'address' => $request->input('address'),
            'image' => $uploadedImageResponse['image_url'],
        ]);

        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'address' => 'sometimes|required|string|max:255',
            'image' => 'sometimes|required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 422);
        }

        $user = User::findOrFail($id);

        if ($request->has('name')) {
            $user->name = $request->input('name');
        }

        if ($request->has('address')) {
            $user->address = $request->input('address');
        }

        if ($request->hasFile('image')) {
            if ($user->image) {
                Storage::disk('public')->delete($user->image);
            }

            $image = $request->file('image');
            $uploadFolder = 'users';
            $image_uploaded_path = $image->store($uploadFolder, 'public');
            $user->image = Storage::disk('public')->url($image_uploaded_path);
        }

        $user->save();

        return response()->json(['message' => 'User updated successfully', 'user' => $user], 200);
    }

    public function delete($id)
    {
         $user = User::findOrFail($id);

         if ($user->image) {
             Storage::disk('public')->delete($user->image);
         }
 
         $user->delete();
 
         return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
