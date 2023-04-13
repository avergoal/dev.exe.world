import { defineStore } from 'pinia'

export const useMediaStore = defineStore('media', {
    state: () => ({
        mediaTypes: Array
    }),
    getters: {
        getMediaTypes: (state) => state.mediaTypes
    },
    actions: {
        setState(type, value) {
            this[type] = value
        },
        uploadMedia(image, params, onUploadProgress) {
            const formData = new FormData()
            formData.append('file', image)
            Object.keys(params).forEach((key) => {
                formData.append(key, params[key])
            })
            return this.$axios.post('dev.media.upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress
            })
        }
    }
})