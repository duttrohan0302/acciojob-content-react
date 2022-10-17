import React,{useState, useCallback} from "react";

const UseCallbackComp = () => {
    const [skill, setSkill] = useState("")

    const [skills,setSkills] = useState(["HTML","CSS"," JS"])

    const handleChangeInput = (event) => {
        setSkill(event.target.value)
    }

    const addSkills = () => {
        setSkills(skills.concat(skill))
    }

    const handleRemoveSkill = useCallback((skill) => {
        setSkills(skills.filter(s=>s!==skill))
    },[skills])
    return(
        <>
            <input type="text" onChange={handleChangeInput} />
            <button onClick={addSkills}>Add Skill</button>
            <SkillsList skills={skills} handleRemoveSkill={handleRemoveSkill}/>
        </>
    )
}

const SkillsList = React.memo(({skills,handleRemoveSkill}) =>{
    console.log("re-rendering")

    return(
        <ul>
            {
                skills.map((skill,i)=>(
                    <li key={i} onClick={()=>handleRemoveSkill(skill)} >{skill}</li>
                ))
            }
        </ul>
    )
})

export default UseCallbackComp;