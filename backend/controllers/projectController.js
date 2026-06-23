import { db } from '../db.js'

export const projectController = {
  async list(req, res) {
    const projects = await db.getProjects()
    return successResponse(res, projects)
  },

  async create(req, res) {
    const project = await db.addProject(req.body)
    return successResponse(res, project, 201)
  },

  async update(req, res) {
    const project = await db.updateProject(req.params.id, req.body)
    if (!project) return errorResponse(res, 'Project not found.', 404)
    return successResponse(res, project)
  },

  async remove(req, res) {
    const deleted = await db.deleteProject(req.params.id)
    if (!deleted) return errorResponse(res, 'Project not found.', 404)
    return successResponse(res, { deleted: true })
  },
}
