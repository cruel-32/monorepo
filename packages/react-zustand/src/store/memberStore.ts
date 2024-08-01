import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { Member } from '@/models/member/Member';

interface MemberStore {
  memberDetail: Member;
  members: Member[];
  getMemberDetail: (id: number) => Promise<void>;
  removeMember: (id: number) => void;
  removeAllMembers: () => void;
  insertMember: (member: Member) => void;
  updateMember: (id: number, member: Member) => void;
  setMember: (newMember: Partial<Member>) => void;
  clearMember: () => void;
}

const useMemberStore = create<MemberStore>()(
  immer((set) => ({
    memberDetail: {
      id: -1,
      name: '',
      age: -1,
      job: '',
    },
    members: [
      {
        id: 1,
        name: 'John Doe',
        age: 31,
        job: 'Software Engineer',
      },
      {
        id: 2,
        name: 'Jane Doe',
        age: 32,
        job: 'Software Engineer',
      },
    ],
    insertMember: (member: Member) =>
      set((state) => {
        const lastId = state.members.at(-1)?.id ?? 0;
        state.members = [...state.members, { ...member, id: lastId + 1 }];
      }),
    updateMember: (id: number, member: Member) =>
      set((state) => {
        const index = state.members.findIndex((member) => member.id === id);
        console.log('index ::::: ', index);
        if (index! !== -1) {
          state.members[index] = member;
        }
      }),
    setMember: (newMember) =>
      set((state) => ({ memberDetail: { ...state.memberDetail!, ...newMember } })),
    clearMember: () =>
      set((state) => {
        state.memberDetail = { id: -1, name: '', age: -1, job: '' };
      }),
    getMemberDetail: async (id: number) => {
      const memberDetail: Member = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: id,
            name: 'John Doe',
            age: 31,
            job: 'Software Engineer',
          });
        }, 200);
      });
      set({ memberDetail });
    },
    removeMember: (id: number) =>
      set((state) => ({ members: state.members.filter((member) => member?.id !== id) })),
    removeAllMembers: () => set({ members: [] }),
  })),
);

export default useMemberStore;
