import { Input } from 'antd'
import React from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styled from 'styled-components'
import HeaderWriteBlog from './HeaderWriteBlog'
const Container = styled.div`
    height: 100vh;
    .ql-container.ql-snow {
        border: none !important;
    }
    .ql-toolbar.ql-snow {
        border: none !important;
    }
    .editor {
        height: 100%;
    }
    .editorContainer {
        margin-top: 80px;
        padding: 0 32px;
        height: 100%;
    }
    .titleInput {
        border: none;
        color: #292929;
        font-size: 3.2rem;
        font-weight: 500;
        min-height: 48px;
        width: 100%;
    }
`
const WriteBlog = () => {
    const [value, setValue] = React.useState('')
    const [title, setTitle] = React.useState('')
    let canPublish = value !== '' && value !== '<p><br></p>' && title !== ''
    console.log({ value, title })
    const modules = {
        toolbar: [
            [{ header: [false, 1, 2, 3] }],
            [{ align: [] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ script: 'super' }, 'strike'],
            [{ color: [] }, { background: [] }],
            ['link', 'image']
        ]
    }

    const formats = [
        'header',
        'align',
        'bold',
        'italic',
        'underline',
        'list',
        'bullet',
        'indent',
        'indent',
        'script',
        'strike',
        'color',
        'background',
        'link',
        'image'
    ]
    React.useEffect(() => {
        document.title = title
    }, [title])
    return (
        <Container>
            <HeaderWriteBlog canPublish={canPublish} />
            <div className="editorContainer">
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="titleInput"
                    placeholder="Tiêu đề"
                />
                <ReactQuill
                    modules={modules}
                    formats={formats}
                    className="editor"
                    placeholder="Nội dung viết ở đây"
                    theme="snow"
                    value={value}
                    onChange={setValue}
                />
            </div>
        </Container>
    )
}

export default WriteBlog
