/* import { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
  // 이 곳에서 Rest API 호출
  const { data } = await axios.get(`${process.env.API_ENDPOINT}/api/04/users`);
  //const usersReq = await axios.get('https://api.rwnjs.com/04/users')
  return {
    props: {
      users: data,
    },
  };
  
}

export default function HomePage({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            {user.username}
          </Link>
        </li>
      ))}
    </ul>
  );
}*/

import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API_ENDPOINT}/api/04/users`);

  return {
    props: {
      users: data,
    },
  };
}

export default function HomePage({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            {user.username}
          </Link>
        </li>
      ))}
    </ul>
  );
}