export default function getAttacks(object) {
  return object.special.map((attack) => {
    const { id, icon, description = 'Описание недоступно' } = attack;
    return { id, icon, description };
  });
}
