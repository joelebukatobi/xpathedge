<?php

namespace App\Http\Controllers;


use App\Models\Career;
use Illuminate\Http\Request;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $positions = Career::orderBy('created_at', 'asc')->get();
        $response = [
            'success' => true,
            'positions' => $positions,
        ];

        return response($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate(
            [
                'name' => 'required',
                'responsibilities' => 'required',
                'category' => 'required',
                'company_description' => 'required',
                'role' => 'required',
                'about' => 'required',
                'link' => 'required',
                'type' => 'required'
            ],
            [
                'title.required' => 'Please enter name of position',
                'responsibilities.required' => 'Please enter the job description of the position',
                'category.required' => 'Please enter the position category',
                'company_decription.required' => `Please enter the company's description`,
                'role.required' => 'Please enter the the details for this role',
                'about.required' => 'Please enter the the expected profile of this position',
                'link' => 'Please enter the external application link',
                'type' => 'Please enter the type of position',
            ]
        );

        $position = Career::create([
            'name' => $request->name,
            'responsibilities' => $request->responsibilities,
            'category' => $request->category,
            'company_description' => $request->company_description,
            'role' => $request->role,
            'about' => $request->about,
            'link' => $request->link,
            'type' => $request->type
        ]);

        $response = [
            'success' => true,
            'message' => 'Position added successfully',
            'position' => $position,

        ];

        return response($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        //
        $position = Career::where(['slug' => $slug])->orderBy('created_at', 'asc')->firstOrFail();
        $response = [
            'success' => true,
            'position' => $position,
        ];

        return response($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        //
        $request->validate(
            [
                'name' => 'required',
                'responsibilities' => 'required',
                'category' => 'required',
                'company_description' => 'required',
                'role' => 'required',
                'about' => 'required',
                'link' => 'required',
                'type' => 'required'
            ],
            [
                'title.required' => 'Please enter name of position',
                'responsibilities.required' => 'Please enter the job description for the position',
                'category.required' => 'Please enter the position category',
                'company_decription.required' => `Please enter the company's description`,
                'role.required' => 'Please enter the the details for this role',
                'about.required' => 'Please enter the the expected profile of this position',
                'link' => 'Please enter the external application link',
                'type' => 'Please enter the type of position',
            ]
        );

        $position = Career::where(['slug' => $slug])->firstOrFail();
        $edit = $request->all();
        $position->update($edit);

        $response = [
            'success' => true,
            'message' => 'Position added successfully',
            'position' => $position,

        ];

        return response($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        //
        $position = Career::where(['slug' => $slug])->firstOrFail()->delete();
        $response = [
            'success' => true,
            'message' => 'Position deleted successfully',
        ];

        return response($response, 200);
    }
}