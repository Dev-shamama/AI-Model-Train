"use client"
import { ProfileSetting } from "@/app/styleComponent/Dashboard.styled";
import Image from "next/image";
import React from "react";
import ProfileImage from "@/app/assets/img/profileimage.jpg";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

const Setting = () => {
  const auth = useAuth();

  if(auth?.isAuth === false) {
    redirect('/login')
  }

  return (
    <>
      <div className="dashboard-start">
        <h1>Profile Setting</h1>
      </div>

      <ProfileSetting>
        <div className="top-part">
          <div className="profile-img">
            <div className="img">
              <Image src={ProfileImage} alt="Profile_Image" />
            </div>
            <h3>{auth?.userData?.name}</h3>
            <p>{auth?.userData?.email}</p>
          </div>
          <div className="profile-detail">
            <table>
              <tbody>
                <tr>
                  <th>Full Name</th>
                  <td>{auth?.userData?.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{auth?.userData?.email}</td>
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
