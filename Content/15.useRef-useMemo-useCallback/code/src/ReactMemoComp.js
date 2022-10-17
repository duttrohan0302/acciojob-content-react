import React,{useState} from "react";

const ReactMemoComp = () => {
    const [skill, setSkill] = useState("")

    const [skills,setSkills] = useState(["HTML","CSS"," JS"])

    const handleChangeInput = (event) => {
        setSkill(event.target.value)
    }

    const addSkills = () => {
        setSkills(skills.concat(skill))
    }

    return(
        <>
            <input type="text" onChange={handleChangeInput} />
            <button onClick={addSkills}>Add Skill</button>
            <SkillsList skills={skills} />
        </>
    )
}

const SkillsList = React.memo(({skills}) =>{
    console.log("re-rendering")

    return(
        <ul>
            {
                skills.map((skill,i)=>(
                    <li key={i} >{skill}</li>
                ))
            }
        </ul>
    )
})

export default ReactMemoComp;