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
                'position' => 'required',
                'company_overview' => 'required',
                'job_description' => 'required',
                'responsibilities' => 'required',
                'qualifications' => 'required',
                'salary' => 'required',
                'benefits' => 'required',
                'category' => 'required',
                'link' => 'required',
                'type' => 'required'
            ],
            [
                'position.required' => 'Please enter the role',
                'company_overview.required' => `Please enter the company's overview`,
                'job_description.required' => 'Please enter the job description of the position',
                'responsibilities.required' => 'Please enter the job responsibilities of the position',
                'qualifications' => 'required',
                'salary' => 'Please enter the salary range for the position',
                'benefits' => 'Please enter the benefits for this position',
                'category.required' => 'Please enter the position category',
                'link' => 'Please enter the external application link',
                'type' => 'Please enter the type of position',
            ]
        );

        $position = Career::create([
            'position' => $request->position,
            'company_overview' => $request->company_overview,
            'job_description' => $request->job_description,
            'responsibilities' => $request->responsibilities,
            'qualifications' => $request->qualifications,
            'salary' => $request->salary,
            'benefits' => $request->benefits,
            'category' => $request->category,
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
                'position' => 'required',
                'company_overview' => 'required',
                'job_description' => 'required',
                'responsibilities' => 'required',
                'qualifications' => 'required',
                'salary' => 'required',
                'benefits' => 'required',
                'category' => 'required',
                'link' => 'required',
                'type' => 'required'
            ],
            [
                'position.required' => 'Please enter the role',
                'company_overview.required' => `Please enter the company's overview`,
                'job_description.required' => 'Please enter the job description of the position',
                'responsibilities.required' => 'Please enter the job responsibilities of the position',
                'qualifications' => 'required',
                'salary' => 'Please enter the salary range for the position',
                'benefits' => 'Please enter the benefits for this position',
                'category.required' => 'Please enter the position category',
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