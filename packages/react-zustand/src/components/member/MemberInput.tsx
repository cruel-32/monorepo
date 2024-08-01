import { Button } from '@monorepo/common/src/components/atoms/Button';
import { Input } from '@monorepo/common/src/components/atoms/Input';

import useMemberStore from '@/store/memberStore';

import { createMemberSchema } from '@/models/member/Member';

function MemberInput() {
  const memberStore = useMemberStore();
  const updateMember = () => {
    if (memberStore.memberDetail?.id !== undefined) {
      const result = createMemberSchema.validate(memberStore.memberDetail);
      result
        .then(() => {
          memberStore.updateMember(memberStore.memberDetail?.id, memberStore.memberDetail!);
          memberStore.clearMember();
        })
        .catch((err) => {
          window.alert(err);
        });
    }
  };

  const insertMember = () => {
    const result = createMemberSchema.validate(memberStore.memberDetail);
    result
      .then(() => {
        memberStore.insertMember(memberStore.memberDetail!);
        memberStore.clearMember();
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log('evt :::: ', evt.target.value);
    console.log('typeof evt :::: ', typeof evt.target.value);
    const { name, value } = evt.target;
    memberStore.setMember({ [name]: value });
  };

  return (
    <div>
      <p>멤버 {memberStore.memberDetail?.id >= 0 ? memberStore.memberDetail?.id : ''}</p>
      id:{' '}
      <Input
        value={memberStore.memberDetail?.id >= 0 ? memberStore.memberDetail?.id : ''}
        disabled
        type="number"
      />
      <br />
      name: <Input onChange={handleChange} name="name" value={memberStore.memberDetail?.name} />
      <br />
      age:{' '}
      <Input
        onChange={handleChange}
        name="age"
        value={memberStore.memberDetail?.age >= 0 ? memberStore.memberDetail?.age : ''}
        type="number"
      />
      <br />
      job: <Input onChange={handleChange} name="job" value={memberStore.memberDetail?.job} />
      <br />
      {memberStore.memberDetail?.id >= 0 ? (
        <Button onClick={updateMember}>수정</Button>
      ) : (
        <Button onClick={insertMember}>추가</Button>
      )}
      <Button onClick={memberStore.clearMember}>클리어</Button>
    </div>
  );
}

export default MemberInput;
