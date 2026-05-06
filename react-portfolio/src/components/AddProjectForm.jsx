import { useState } from "react"

function AddProjectForm({ addProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addProject(formData)

    setFormData({
      title: "",
      description: "",
      image: "",
      category: "",
    })
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>

      <input
        type="text"
        name="title"
        placeholder="Project title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Project description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Project</button>
    </form>
  )
}

export default AddProjectForm