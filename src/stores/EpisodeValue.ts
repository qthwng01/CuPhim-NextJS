import { selector } from 'recoil'
import { episodeAtom } from './EpisodeAtom'

export const episodeValue = selector({
  key: 'EpisodeValue',
  get: ({ get }) => ({
    episodeCurrent: get(episodeAtom),
  }),
})
