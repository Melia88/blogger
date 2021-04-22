import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getByProfileId(_id) {
    try {
      const res = await api.get('api/profile/' + _id)
      AppState.activeProfile = res.data
    } catch (error) {
      logger.log('EROOOORRRR!', error)
    }
  }
}

export const profileService = new ProfileService()
