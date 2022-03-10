import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        // if form is left empty
        if(!text) {
            alert('Please add a Task')
            return
        }

        onAdd({ text,day,reminder })  // will submit the values in the form

        // will reset the values of the form
        setText('')
        setDay('')
        setReminder(false)

    }


  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task"  value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
        <div className="form-control form-control-check">
            <label>Task</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

        <input type="submit" value="Save Task" className="btn btn-block"/> 
    </form>
  )
  }

export default AddTask
