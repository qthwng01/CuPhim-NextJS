import { atom } from 'recoil'

// const getDefaultEpisode = () => {
//   if (typeof window !== 'undefined' && window.localStorage) {
//     const savedEpisode = localStorage.getItem('episode')
//     return savedEpisode ? savedEpisode : ''
//   }
//   return ''
// }

export const episodeAtom = atom({
  key: 'EpisodeAtom',
  default: '',
})
