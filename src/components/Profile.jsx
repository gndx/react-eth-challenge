import React from 'react';

const Profile = ({ profile }) => {
  return (
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center Profile-title">
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16 Profile-desc">
                    {profile?.split('\n').map((line,i) => <p className="text-gray-lite  dark:text-color-910 mt-2.5 leading-7" key={i}>
                      { line }
                    </p>)}
                  </div>
                </div>
              </div>
  );

};

export default Profile;
