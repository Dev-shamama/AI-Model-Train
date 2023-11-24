"use client";
import { ProfileSetting } from "@/app/styleComponent/Dashboard.styled";
import Image from "next/image";
import React, { useEffect } from "react";
import ProfileImage from "@/app/assets/img/profileimage.jpg";
import { useSession } from "next-auth/react";

const Setting = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="dashboard-start">
        <h1>Profile Setting</h1>
      </div>

      <ProfileSetting>
        <div className="top-part">
          <div className="profile-img">
            <div className="img">
              <Image
                src={session?.user?.image ? session?.user?.image : ProfileImage}
                alt="Profile_Image"
                width={100}
                height={100}
              />
            </div>
            <h3>{session?.user?.name}</h3>
            <p>{session?.user?.email}</p>
          </div>
          <div className="profile-detail">
            <table>
              <tbody>
                <tr>
                  <th>Full Name</th>
                  <td>{session?.user?.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{session?.user?.email}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>Male</td>
                </tr>
                <tr>
                  <th>Mobile</th>
                  <td>+92 300432088776</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>Bay Area, San Francisco, CA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ProfileSetting>
    </>
  );
};

export default Setting;
