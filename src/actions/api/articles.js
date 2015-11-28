import $ from 'jquery'

export const loadAll = () => $.get('/api/article')