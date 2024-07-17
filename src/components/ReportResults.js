import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const resultsData = [
  { id: 1, studentName: 'Ahmed Ali', examName: 'Midterm', subject: 'Mathematics', marks: 85, grade: 'A' },
    { id: 2, studentName: 'Fatima Hussein', examName: 'Final', subject: 'English', marks: 90, grade: 'A+' },
    { id: 3, studentName: 'Mohamed Hassan', examName: 'Midterm', subject: 'Science', marks: 78, grade: 'B' },
    { id: 4, studentName: 'Ayan Farah', examName: 'Final', subject: 'History', marks: 82, grade: 'B+' },
    { id: 5, studentName: 'Yusuf Ibrahim', examName: 'Midterm', subject: 'Geography', marks: 92, grade: 'A+' },
    { id: 6, studentName: 'Khadija Abdullahi', examName: 'Final', subject: 'Art', marks: 88, grade: 'A' },
    { id: 7, studentName: 'Abdirahman Ahmed', examName: 'Midterm', subject: 'Mathematics', marks: 79, grade: 'B' },
    { id: 8, studentName: 'Layla Ali', examName: 'Final', subject: 'English', marks: 91, grade: 'A+' },
    { id: 9, studentName: 'Ismail Mohamed', examName: 'Midterm', subject: 'Science', marks: 75, grade: 'B' },
    { id: 10, studentName: 'Hamdi Hassan', examName: 'Final', subject: 'History', marks: 85, grade: 'B+' },
    { id: 11, studentName: 'Zahra Yusuf', examName: 'Midterm', subject: 'Geography', marks: 88, grade: 'A' },
    { id: 12, studentName: 'Ali Ibrahim', examName: 'Final', subject: 'Art', marks: 90, grade: 'A+' },
    { id: 13, studentName: 'Maryam Hussein', examName: 'Midterm', subject: 'Mathematics', marks: 87, grade: 'A' },
    { id: 14, studentName: 'Abdi Abdullahi', examName: 'Final', subject: 'English', marks: 83, grade: 'B' },
    { id: 15, studentName: 'Nasra Ahmed', examName: 'Midterm', subject: 'Science', marks: 81, grade: 'B' },
    { id: 16, studentName: 'Farah Ali', examName: 'Final', subject: 'History', marks: 89, grade: 'A' },
    { id: 17, studentName: 'Hassan Mohamed', examName: 'Midterm', subject: 'Geography', marks: 94, grade: 'A+' },
    { id: 18, studentName: 'Asha Hassan', examName: 'Final', subject: 'Art', marks: 86, grade: 'A' },
    { id: 19, studentName: 'Salma Yusuf', examName: 'Midterm', subject: 'Mathematics', marks: 93, grade: 'A+' },
    { id: 20, studentName: 'Omar Ibrahim', examName: 'Final', subject: 'English', marks: 84, grade: 'B' },
    { id: 21, studentName: 'Muna Abdullahi', examName: 'Midterm', subject: 'Science', marks: 77, grade: 'B' },
    { id: 22, studentName: 'Ibrahim Ahmed', examName: 'Final', subject: 'History', marks: 80, grade: 'B' },
    { id: 23, studentName: 'Halima Ali', examName: 'Midterm', subject: 'Geography', marks: 90, grade: 'A+' },
    { id: 24, studentName: 'Abdullahi Mohamed', examName: 'Final', subject: 'Art', marks: 88, grade: 'A' },
    { id: 25, studentName: 'Asma Hassan', examName: 'Midterm', subject: 'Mathematics', marks: 82, grade: 'B+' },
    { id: 26, studentName: 'Faysal Yusuf', examName: 'Final', subject: 'English', marks: 91, grade: 'A+' },
    { id: 27, studentName: 'Sahra Ibrahim', examName: 'Midterm', subject: 'Science', marks: 76, grade: 'B' },
    { id: 28, studentName: 'Bilal Abdullahi', examName: 'Final', subject: 'History', marks: 85, grade: 'B+' },
    { id: 29, studentName: 'Amina Ahmed', examName: 'Midterm', subject: 'Geography', marks: 89, grade: 'A' },
    { id: 30, studentName: 'Jibril Ali', examName: 'Final', subject: 'Art', marks: 87, grade: 'A' },
    { id: 31, studentName: 'Hibo Mohamed', examName: 'Midterm', subject: 'Mathematics', marks: 84, grade: 'B' },
    { id: 32, studentName: 'Khalid Hassan', examName: 'Final', subject: 'English', marks: 92, grade: 'A+' },
    { id: 33, studentName: 'Ruqiya Yusuf', examName: 'Midterm', subject: 'Science', marks: 79, grade: 'B' },
    { id: 34, studentName: 'Hodan Ibrahim', examName: 'Final', subject: 'History', marks: 81, grade: 'B' },
    { id: 35, studentName: 'Saed Abdullahi', examName: 'Midterm', subject: 'Geography', marks: 93, grade: 'A+' },
    { id: 36, studentName: 'Samira Ahmed', examName: 'Final', subject: 'Art', marks: 88, grade: 'A' },
    { id: 37, studentName: 'Liban Ali', examName: 'Midterm', subject: 'Mathematics', marks: 85, grade: 'B+' },
    { id: 38, studentName: 'Habiba Mohamed', examName: 'Final', subject: 'English', marks: 90, grade: 'A+' },
    { id: 39, studentName: 'Faduma Hassan', examName: 'Midterm', subject: 'Science', marks: 77, grade: 'B' },
    { id: 40, studentName: 'Bashir Yusuf', examName: 'Final', subject: 'History', marks: 82, grade: 'B+' },
    { id: 41, studentName: 'Yasmin Ibrahim', examName: 'Midterm', subject: 'Geography', marks: 92, grade: 'A+' },
    { id: 42, studentName: 'Mohamud Abdullahi', examName: 'Final', subject: 'Art', marks: 86, grade: 'A' },
    { id: 43, studentName: 'Sumaya Ahmed', examName: 'Midterm', subject: 'Mathematics', marks: 89, grade: 'A' },
    { id: 44, studentName: 'Fawzia Ali', examName: 'Final', subject: 'English', marks: 83, grade: 'B' },
    { id: 45, studentName: 'Khadra Mohamed', examName: 'Midterm', subject: 'Science', marks: 80, grade: 'B' },
    { id: 46, studentName: 'Nadifa Hassan', examName: 'Final', subject: 'History', marks: 88, grade: 'A' },
    { id: 47, studentName: 'Abdikarim Yusuf', examName: 'Midterm', subject: 'Geography', marks: 91, grade: 'A+' },
    { id: 48, studentName: 'Hani Ibrahim', examName: 'Final', subject: 'Art', marks: 87, grade: 'A' },
    { id: 49, studentName: 'Salim Abdullahi', examName: 'Midterm', subject: 'Mathematics', marks: 86, grade: 'A' },
    { id: 50, studentName: 'Hodan Ahmed', examName: 'Final', subject: 'English', marks: 84, grade: 'B' }
];

const ReportResults = () => {
  const [results, setResults] = useState(resultsData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleEdit = (result) => {
    setSelectedResult(result);
    setShowEditModal(true);
  };

  const handleDelete = (result) => {
    setSelectedResult(result);
    setShowDeleteModal(true);
  };

  const handleSave = () => {
    setShowEditModal(false);
    // Save changes to result (logic to be implemented)
  };

  const handleConfirmDelete = () => {
    setResults(results.filter((result) => result.id !== selectedResult.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Result Reports</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Exam Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.studentName}</td>
              <td>{result.examName}</td>
              <td>{result.subject}</td>
              <td>{result.marks}</td>
              <td>{result.grade}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(result)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(result)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="editStudentName">Student Name</label>
              <input
                type="text"
                className="form-control"
                id="editStudentName"
                defaultValue={selectedResult?.studentName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="editExamName">Exam Name</label>
              <input
                type="text"
                className="form-control"
                id="editExamName"
                defaultValue={selectedResult?.examName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="editSubject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="editSubject"
                defaultValue={selectedResult?.subject}
              />
            </div>
            <div className="form-group">
              <label htmlFor="editMarks">Marks</label>
              <input
                type="number"
                className="form-control"
                id="editMarks"
                defaultValue={selectedResult?.marks}
              />
            </div>
            <div className="form-group">
              <label htmlFor="editGrade">Grade</label>
              <input
                type="text"
                className="form-control"
                id="editGrade"
                defaultValue={selectedResult?.grade}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {selectedResult?.studentName}'s result?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReportResults;
