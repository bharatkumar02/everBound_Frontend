import SmHeader from './SmHeader';
import LgHeader from './LgHeader';

function Header() {
  return (
    <>
      <header className='w-full'>
        {/* Header for small Screen up to lg(1024px) */}
        <div className='min-[1280px]:hidden'>
          <SmHeader />
        </div>

        {/* Header for Large Screen from lg to ... */}
        <div className='hidden min-[1280px]:block'>
          <LgHeader />
        </div>
      </header>
    </>
  );
}
export default Header;
