import { Button } from '@monorepo/common/src/components/atoms/Button';

import useMemberStore from '@/store/memberStore';

function MemberList() {
  const memberStore = useMemberStore();

  return (
    <div>
      <p>멤버들</p>
      {memberStore.members.map((member) => (
        <div key={member?.id}>
          id: <Button onClick={() => memberStore.getMemberDetail(member?.id!)}>{member?.id}</Button>
          <br />
          name: {member?.name} <br />
          age: {member?.age} <br />
          job: {member?.job} <br />
          <Button onClick={() => memberStore.removeMember(member?.id!)}>removeMember</Button>
        </div>
      ))}
    </div>
  );
}

export default MemberList;
