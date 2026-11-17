import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentStore } from "./useStudentStore";

export default function StudentsApp() {
    const navigate = useNavigate();
    const { students, fetchStudents } = useStudentStore();

    useEffect(() => {
        fetchStudents();
    }, [fetchStudents]);

    function logout() {
        navigate("/logout");
    }

    function addRecord() {
        navigate("/students/add");
    }

    function updateRecords(id) {
        navigate(`/update/${id}`);
    }

    return (
        <div className="hf bg20">
            <nav className="bg50 fxc jsb p3">
                <div>LOGO</div>
                <button onClick={logout}>Logout</button>
            </nav>

            <div className="p3" style={{ width: "600px" }}>
                {students.length === 0 ? (
                    <p>No records found</p>
                ) : (
                    <div className="mt2 p2 bg70" style={{ width: "650px" }}>
                        <div className="fxc jsb">
                            <h3>Students Examination Records</h3>

                            <button
                                onClick={addRecord}
                                className="bg50 mb1"
                            >
                                Add Record
                            </button>
                        </div>

                        <div
                            className="fx b1 br2 p1 bg72"
                            style={{ textAlign: "left", color: "skyblue" }}
                        >
                            <span>Section</span>
                            <span>ID</span>
                            <span className="sp15">Name</span>
                            <span>Marks</span>
                            <span>Actions</span>
                        </div>

                        {students.map((student) => (
                            <div
                                key={student.id}
                                className="fx mt1 p1 bg72"
                                style={{
                                    textAlign: "center",
                                    alignItems: "center",
                                }}
                            >
                                <span>{student.section}</span>
                                <span>{student.roll_number}</span>
                                <span className="sp15">{student.name}</span>
                                <span>{student.marks}</span>

                                <span>
                                    <button
                                        onClick={() => updateRecords(student.id)}
                                        className="bg50 btn1"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteRecord(student.id)}
                                        className="bg31 btn1 ml2"
                                    >
                                        Delete
                                    </button>
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}