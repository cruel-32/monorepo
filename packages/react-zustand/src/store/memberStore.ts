import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface MemberStore {
    memberDetail: {
        id: number;
        name: string;
        age: number;
        job: string;
    },
    members: MemberStore['memberDetail'][],
    getMemberDetail: (id: number) => Promise<void>,
    getMembers: () => Promise<void>,
    removeMember: (id: number) => void,
    removeAllMembers: () => void,
    pushMember: (member: MemberStore['memberDetail']) => void,
    setMember: (newMember: Partial<MemberStore['memberDetail']>) => void,
}

const useMemberStore = create<MemberStore>()(
    immer((set) => (
        {
            memberDetail: {
                id: 0,
                name: '',
                age: 0,
                job: '',
            },
            members: [],
            pushMember: (member: MemberStore['memberDetail']) => set((state) => ({ members: [...state.members, member] })),
            setMember: (newMember) => set((state) => ({ memberDetail: { ...state.memberDetail!, ...newMember } })),
            getMemberDetail: async (id: number) => {
                const memberDetail: MemberStore['memberDetail'] = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            id: id,
                            name: 'John Doe',
                            age: 31,
                            job: 'Software Engineer',
                        })
                    }, 1000)
                });
                set({ memberDetail })
            },
            getMembers: async () => {
                const members: MemberStore['members'] = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve([
                            {
                                id: 1,
                                name: 'John Doe',
                                age: 31,
                                job: 'Software Engineer',
                            },
                            {
                                id: 2,
                                name: 'Jane Doe',
                                age: 29,
                                job: 'Designer',
                            },
                            {
                                id: 3,
                                name: 'James Smith',
                                age: 33,
                                job: 'Product Manager',
                            },
                        ])
                    }, 1000)
                });
                set({ members })
            },
            removeMember: (id: number) => set((state) => ({ members: state.members.filter((member) => member?.id !== id) })),
            removeAllMembers: () => set({ members: [] }),
        }
    ))
);



export default useMemberStore