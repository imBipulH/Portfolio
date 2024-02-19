// eslint-disable-next-line react/prop-types
export default function Education ({ title, year, institution }) {
  return (
    <>
      <div className='my-8 flex gap-4 items-center'>
        <div className='rounded-full bg-secondary inline-block p-3 w-14 h-14 z-10'>
          <img className='bg-secondary ' src='../src/assets/vector.png' />
        </div>
        <div>
          <h3 className='text-2xl flex'>
            {title}
            <span className='text-lg ml-4'>{year}</span>
          </h3>
          <p className='text-lg'>{institution}</p>
        </div>
      </div>
    </>
  )
}
