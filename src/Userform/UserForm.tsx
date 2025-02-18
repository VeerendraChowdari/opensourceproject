import React, { useState, useEffect } from 'react';
import './UserForm.css';

interface UserData {
    name: string;
    address: string;
    email: string;
    phone: string;
}

const initialFormData: UserData = {
    name: '',
    address: '',
    email: '',
    phone: '',
};

const UserForm: React.FC = () => {
    const [formData, setFormData] = useState<UserData>(initialFormData);
    const [unsavedChanges, setUnsavedChanges] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (unsavedChanges) {
                e.preventDefault();
                e.returnValue = '';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [unsavedChanges]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setUnsavedChanges(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userId = Date.now();
        const dataToSave = { ...formData, userId };

        localStorage.setItem('userData', JSON.stringify(dataToSave));

        alert('Form submitted successfully!');

        setFormData(initialFormData);
        setUnsavedChanges(false);
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h2>User Data Form</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
