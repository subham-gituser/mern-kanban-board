import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { AuthContext } from '../config/Auth';
import { ReactComponent as BoardImg } from '../assets/boardplanner.svg';

const LandingPage = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={`/${user.username}`} />;
  }

  return (
    <div>
      <div className='bg-main w-full h-full -z-10 fixed top-0'></div>
      <div className='flex justify-between items-center lg:pb-16 md:pt-6 pt-4 px-8 lg:px-24'>
        <a href='/' className='font-bold text-4xl text-blue-900'>
          KanbanBoard
        </a>
        <div>
          <Link
            to='/login'
            className='bg-transparent border border-blue-600 text-blue-600 py-2 px-4 shadow font-medium 
              rounded-sm hover:bg-white hover:text-blue-700 transition-colors duration-150 mr-6 '>
            Log In
          </Link>
          <Link
            to='/signup'
            className='bg-blue-600 border border-blue-600 text-white py-2 px-4 shadow font-medium 
              rounded-sm hover:bg-blue-700 transition-colors duration-150'>
            Sign Up
          </Link>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center my-0 mx-auto w-11/12 px-2 lg:flex-row'>
        <div className='md:w-11/12 pt-16 pb-8 md:px-16'>
          <h1 className='text-5xl pb-2 lg:text-6xl md:mb-2 text-gray-800 font-bold h-full text-center lg:text-left'>
            Easily build your <strong className='text-gray-900'>Kanban </strong>
            board within minutes.
          </h1>
          <p className='text-2xl pb-4 leading-8 text-center text-gray-500 lg:text-left'>
            Plan, track and organize your dream projects or everyday tasks.
          </p>
        </div>

        <div className='w-full h-full md:max-w-xl lg:max-w-full lg:ml-4'>
          <BoardImg alt='People plan on board' width='100%' height='100%' />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
