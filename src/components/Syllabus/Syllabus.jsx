import React from 'react'
import SyllabusBox from '../../components/SyllabusBox/SyllabusBox'
import syllabus from '../../api/syllabus'
const Syllabus = () => {
    return (
        <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
                {
                    syllabus.map((sy, index) => {
                        return <SyllabusBox key={index} sy={sy} />
                    })
                }

            </div>
        </div>
    )
}

export default Syllabus