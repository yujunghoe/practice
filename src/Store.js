import { create } from 'zustand';

const useStore = create((set) => ({
  posts: [], // 사용자가 작성한 글들

  // 글 추가 (id 중복 방지 고려)
addPost: (newPost) =>
    set((state) => {
    const maxDummyId = 3; // 더미 데이터 최대 id
    const maxUserId = state.posts.length > 0 ? Math.max(...state.posts.map(p => p.id)) : maxDummyId;
    return {
        posts: [
        {
            id: maxUserId + 1,
            ...newPost
        },
        ...state.posts,
        ],
    };
    }),

likes: {},
dislikes: {},
likedPosts: [],
dislikedPosts: [],

incrementLike: (id) =>
    set((state) => {
    if (state.likedPosts.includes(id)) return {};
    return {
        likes: {
        ...state.likes,
        [id]: (state.likes[id] || 0) + 1,
        },
        likedPosts: [...state.likedPosts, id],
    };
    }),

    incrementDislike: (id) =>
    set((state) => {
        if (state.dislikedPosts.includes(id)) return {};
        return {
        dislikes: {
        ...state.dislikes,
        [id]: (state.dislikes[id] || 0) + 1,
        },
        dislikedPosts: [...state.dislikedPosts, id],
    };
    }),
}));

export default useStore;
