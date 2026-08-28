/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check } from "lucide-react";

export default function App() {
  return (
    <section id="services" className="min-h-screen bg-[#07030F] text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3B127A]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#2E0B5F]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#491696]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center py-20">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[#A383D1] font-semibold tracking-wide text-sm mb-4 block">Pro Access</span>
          <h2 className="text-4xl md:text-[2.75rem] leading-tight font-bold mb-4 tracking-tight">
            Get all Craftwork<br />assets for free
          </h2>
          <p className="text-[#A383D1] text-base max-w-md mx-auto">
            Unlimited access to all Craftwork stuff with a single membership
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center bg-[#5F16B5] rounded-full p-1.5 mb-16 shadow-[0_0_30px_rgba(95,22,181,0.4)]">
          <button className="px-6 py-2 rounded-full text-white/90 text-sm font-medium hover:bg-white/10 transition-colors">
            Month
          </button>
          <button className="px-6 py-2 rounded-full bg-[#17092B] text-white text-sm font-medium shadow-md">
            Quarter
          </button>
          <button className="px-6 py-2 rounded-full text-white/90 text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
            Year 
            <span className="bg-white text-[#5F16B5] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
              Save 84%
            </span>
          </button>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          
          {/* Individual Card */}
          <div className="relative rounded-[2.5rem] p-10 flex flex-col bg-gradient-to-b from-[#7A24DB] to-[#450C85] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            {/* Glass Highlights */}
            <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none overflow-hidden rounded-t-[2.5rem]">
              <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[150%] h-[300px] rounded-[100%] border-b-[1.5px] border-white/40 shadow-[0_20px_40px_rgba(255,255,255,0.1)]" />
              <div className="absolute top-8 left-[18%] w-3 h-3 bg-white rounded-full shadow-[0_0_20px_8px_rgba(255,255,255,0.7)]" />
            </div>

            <div className="relative z-10 flex flex-col items-center mt-6 flex-grow">
              <h3 className="text-2xl font-bold mb-3 tracking-wide">Individual</h3>
              <p className="text-purple-200 text-sm mb-8 text-center h-10 max-w-[200px]">
                For freelancers and independent designers
              </p>
              
              <div className="flex items-baseline justify-center gap-3 mb-10">
                <span className="text-3xl text-purple-300/60 font-medium line-through decoration-purple-300/40 decoration-2">
                  $149
                </span>
                <span className="text-6xl font-bold tracking-tighter">
                  $83
                </span>
              </div>

              <ul className="space-y-4 mb-10 text-left text-sm text-purple-50 w-full flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="leading-tight">Unlimited access to all design assets with total price of $14,082 from $99/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="leading-tight">Good plan for a freelancer and solo designer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="leading-tight">Only one user per account</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="leading-tight">Commercial use</span>
                </li>
              </ul>
            </div>

            <button className="relative z-10 w-full py-4 rounded-full bg-[#140626] text-white font-medium hover:bg-black transition-colors shadow-xl mt-auto">
              Subscribe for $83/quarter
            </button>
          </div>

          {/* Company Card */}
          <div className="relative rounded-[2.5rem] p-10 flex flex-col bg-gradient-to-b from-[#21113D] to-[#120924] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            {/* Glass Highlights */}
            <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none overflow-hidden rounded-t-[2.5rem]">
              <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[150%] h-[300px] rounded-[100%] border-b-[1.5px] border-white/20 shadow-[0_20px_40px_rgba(255,255,255,0.05)]" />
              <div className="absolute top-6 left-[25%] w-2 h-2 bg-white/90 rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]" />
            </div>

            <div className="relative z-10 flex flex-col items-center mt-6 flex-grow">
              <h3 className="text-2xl font-bold mb-3 tracking-wide">Company</h3>
              <p className="text-gray-400 text-sm mb-8 text-center h-10 max-w-[200px]">
                Best choice for any size team or agency
              </p>
              
              <div className="flex items-baseline justify-center gap-3 mb-10">
                <span className="text-3xl text-gray-500/60 font-medium line-through decoration-gray-500/40 decoration-2">
                  $199
                </span>
                <span className="text-6xl font-bold tracking-tighter">
                  $111
                </span>
              </div>

              <ul className="space-y-4 mb-10 text-left text-sm text-gray-300 w-full flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="leading-tight">Everything included in the individual plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="leading-tight">Licensed for teams, startups, agencies and corporates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="leading-tight">Several users per account</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="leading-tight">Commercial use</span>
                </li>
              </ul>
            </div>

            <button className="relative z-10 w-full py-4 rounded-full bg-[#7828D6] text-white font-medium hover:bg-[#651FBD] transition-colors shadow-[0_4px_20px_rgba(120,40,214,0.4)] mt-auto">
              Subscribe for $111/quarter
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
