import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const eventsData = [
  { id: 1, name: 'Annual Day', date: '2024-12-15', time: '18:00' },
  { id: 2, name: 'Sports Meet', date: '2024-09-30', time: '10:00' },
  { id: 3, name: 'Science Fair', date: '2024-10-15', time: '09:00' },
  { id: 4, name: 'Art Exhibition', date: '2024-11-20', time: '14:00' },
  { id: 5, name: 'Music Concert', date: '2024-08-25', time: '17:00' },
  { id: 6, name: 'Drama Night', date: '2024-09-05', time: '19:00' },
  { id: 7, name: 'Math Olympiad', date: '2024-10-10', time: '08:00' },
  { id: 8, name: 'Parent-Teacher Meeting', date: '2024-11-05', time: '16:00' },
  { id: 9, name: 'Debate Competition', date: '2024-12-01', time: '11:00' },
  { id: 10, name: 'Cultural Fest', date: '2024-07-20', time: '13:00' },
  { id: 11, name: 'Book Fair', date: '2024-10-25', time: '10:00' },
  { id: 12, name: 'Talent Show', date: '2024-11-30', time: '18:00' },
  { id: 13, name: 'Career Day', date: '2024-09-15', time: '09:00' },
  { id: 14, name: 'Graduation Ceremony', date: '2024-06-10', time: '15:00' },
  { id: 15, name: 'Chess Tournament', date: '2024-11-10', time: '10:00' },
  { id: 16, name: 'Robotics Workshop', date: '2024-08-05', time: '14:00' },
  { id: 17, name: 'Environmental Awareness Day', date: '2024-07-25', time: '11:00' },
  { id: 18, name: 'Language Day', date: '2024-09-25', time: '09:00' },
  { id: 19, name: 'Fitness Challenge', date: '2024-08-15', time: '08:00' },
  { id: 20, name: 'Coding Competition', date: '2024-10-05', time: '10:00' },
  { id: 21, name: 'History Quiz', date: '2024-09-20', time: '13:00' },
  { id: 22, name: 'Field Trip', date: '2024-07-30', time: '08:00' },
  { id: 23, name: 'Spelling Bee', date: '2024-08-20', time: '09:00' },
  { id: 24, name: 'Poetry Recital', date: '2024-10-20', time: '15:00' },
  { id: 25, name: 'Science Workshop', date: '2024-12-10', time: '12:00' },
];

const ReportEvents = () => {
  const [events, setEvents] = useState(eventsData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  const handleEdit = (event) => {
    setEditEvent(event);
    setShowEditModal(true);
  };

  const handleSave = (editedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === editedEvent.id ? editedEvent : event
    );
    setEvents(updatedEvents);
    setShowEditModal(false);
  };

  const handleDelete = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditEvent(null);
  };

  return (
    <div>
      <h2>Events Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td>{index + 1}</td>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(event)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(event.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editEvent ? editEvent.name : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formEventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={editEvent ? editEvent.date : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formEventTime">
              <Form.Label>Event Time</Form.Label>
              <Form.Control
                type="time"
                defaultValue={editEvent ? editEvent.time : ''}
                readOnly
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(editEvent)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReportEvents;
