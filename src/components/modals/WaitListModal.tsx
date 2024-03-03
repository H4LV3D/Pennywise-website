"use client";
import React, { useState } from "react";
import WaitlistForm from "../forms/Waitlist";

type Props = {};

const WaitListModal = ({}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <>{isModalOpen && <WaitlistForm closeModal={setIsModalOpen} />}</>;
};

export default WaitListModal;
