import getPool from '../../db/getPool.js';

export const updateUserAvatarService = async (avatarName, userId) => {
  const pool = await getPool();
  await pool.query(
    `
    UPDATE users
    SET avatar=?
    WHERE id=?
    `,
    [avatarName, userId]
  );
};
