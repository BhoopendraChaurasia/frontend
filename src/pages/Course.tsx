import {useEffect, type FC} from "react";
import { useDispatch } from "react-redux";
import { courseList } from "../features/course/courseSlice";
import {type AppDispatch} from "../features/store/store";


const courses = [
    {
        id: 1,
        title: "Frontend Development",
        trainer: "John Doe",
        students: 120,
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        category: "Programming",
    },
    {
        id: 2,
        title: "UI/UX Design",
        trainer: "Sarah Smith",
        students: 85,
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766",
        category: "Design",
    },
    {
        id: 3,
        title: "Data Science",
        trainer: "Michael Johnson",
        students: 150,
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        category: "Analytics",
    },
];


const Course: FC = () => {

    const dispatch = useDispatch <AppDispatch>();
    
    useEffect(() => {
        dispatch(courseList());
    }, [dispatch]);

    // const {loading, error, data: courses1} = useSelector((state: any) => state.courses);

    return (

        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">
                        Student Trainer Dashboard
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Manage courses, trainers, and students efficiently
                    </p>
                </div>

                <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-indigo-700">
                    + Add Course
                </button>
            </div>

            {/* Stats */}
            <div className="mb-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h2 className="text-gray-500">Total Courses</h2>
                    <p className="mt-2 text-3xl font-bold text-indigo-600">24</p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h2 className="text-gray-500">Total Trainers</h2>
                    <p className="mt-2 text-3xl font-bold text-pink-600">12</p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h2 className="text-gray-500">Total Students</h2>
                    <p className="mt-2 text-3xl font-bold text-green-600">1,250</p>
                </div>
            </div>

            {/* Course Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses.length > 0 && courses.map((course:any) => (
                    <div
                        key={course.id}
                        className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className="h-52 w-full object-cover"
                        />

                        <div className="p-6">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
                                    {course.category}
                                </span>

                                <span className="text-sm text-gray-400">
                                    {course.students} Students
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800">
                                {course.title}
                            </h2>

                            <p className="mt-2 text-gray-500">
                                Trainer:{" "}
                                <span className="font-medium text-gray-700">
                                    {course.trainer}
                                </span>
                            </p>

                            <div className="mt-6 flex gap-3">
                                <button className="flex-1 rounded-xl bg-indigo-600 py-2 text-white transition hover:bg-indigo-700">
                                    View
                                </button>

                                <button className="flex-1 rounded-xl border border-gray-300 py-2 text-gray-700 transition hover:bg-gray-100">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Course;
