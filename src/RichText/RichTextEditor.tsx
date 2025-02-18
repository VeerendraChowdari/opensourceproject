import React, { useEffect, useState } from 'react';
import './RichTextEditor.css';

const RichTextEditor: React.FC = () => {
    const [content, setContent] = useState<string>("");

    const execCommand = (command: string) => {
        document.execCommand(command, false);
    };

    const saveContent = () => {
        localStorage.setItem('richTextContent', content);
        alert('Content saved!');
    };

    useEffect(() => {
        const savedContent = localStorage.getItem('richTextContent');
        if (savedContent) {
            setContent(savedContent);
        }
    }, []);

    const handleInputChange = () => {
        const editorContent = document.getElementById('editor')?.innerHTML || "";
        setContent(editorContent);
    };

    return (
        <div>
            <h2>Rich Text Editor</h2>
            <div className='commands'>
                <button onClick={() => execCommand('bold')}><b>B</b></button>
                <button onClick={() => execCommand('italic')}><i>I</i></button>
                <button onClick={() => execCommand('underline')}><u>U</u></button>
                <button onClick={() => execCommand('insertOrderedList')}>OL</button>
                <button onClick={() => execCommand('insertUnorderedList')}>UL</button>
                <button onClick={saveContent}>Save</button>
            </div>

            <div

                id="editor"
                contentEditable
                style={{ border: '1px solid #ccc', minHeight: '200px', padding: '10px', marginTop: '10px', color: "white" }}
                onInput={handleInputChange}
            />
        </div>
    );
};

export default RichTextEditor;
