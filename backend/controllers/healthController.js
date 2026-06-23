import { successResponse, errorResponse, generateId } from '../utils/index.js'

export const healthController = {
  async check(req, res) {
    return successResponse(res, {
      status: 'ok',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      env: process.env.NODE_ENV || 'development',
    })
  },
}
