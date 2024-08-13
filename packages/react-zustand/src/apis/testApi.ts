import type { Member } from '@/models/member/Member';

export const getMembers = async () => {
    return new Promise<Member[]>((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: '홍길동', age: 20, job: '학생' },
                { id: 2, name: '김철수', age: 30, job: '회사원' },
                { id: 3, name: '이영희', age: 40, job: '주부' },
            ]);
        }, 1000);
    });

}