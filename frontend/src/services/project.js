import axios from "axios";

const baseUrl = '/api/projects'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const addUserToProject = async (projectId, userId) => {
  const response = await axios.put(`${baseUrl}/${projectId}/users/${userId}`)
  return response.data
}

const addTaskToProject = async (projectId, taskId) => {
  const response = await axios.put(`${baseUrl}/${projectId}/tasks/${taskId}`)
  return response.data
}

export default {
  getAll,
  create,
  addUserToProject,
  addTaskToProject
}