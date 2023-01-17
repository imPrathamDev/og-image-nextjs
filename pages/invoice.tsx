import Image from "next/image";
import React from "react";

const Invoice = () => {
  return (
    <div className="bg-primary-white mx-auto py-4 px-8 h-[1056px] flex flex-col justify-between">
      <div>
        <header className="flex items-center justify-between">
          <div>
            <h1 className="font-Cinzel text-2xl font-semibold text-primary-dark">
              Invoice #0472
            </h1>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <Image
              src={"/logo-transparent-black.png"}
              alt="Logo"
              width={160}
              height={60}
            />
            <div className="mr-6 flex flex-col items-end">
              <h2 className="font-extrabold text-base">REALE GIOIELLERIA</h2>
              <p className="text-sm">291 N 4th St, San Jose, CA 95112, USA</p>
              <span className="text-sm font-semibold text-gray-500">
                August 1, 2021
              </span>
            </div>
          </div>
        </header>
        <main className="my-12">
          <div className="flex justify-between">
            <div className="max-w-xs">
              <h2 className="text-base font-bold">Shipping address</h2>
              <span className="font-bold text-sm text-gray-600">
                Pratham Sharma
              </span>
              <br />
              <span className="text-xs">
                4/238 N.E.B. Housing Board, Behind Krishi Mandi, Behind Krishi
                Mandi, Alwar 301001, Rajasthan
              </span>
              <br />
              <span className="text-xs">
                <span className="font-bold">Phone: </span>
                +917767678
              </span>
            </div>
            <div className="max-w-xs">
              <h2 className="text-base font-bold">Billing address</h2>
              <span className="font-bold text-sm text-gray-600">
                Pratham Sharma
              </span>
              <br />
              <span className="text-xs">
                4/238 N.E.B. Housing Board, Behind Krishi Mandi, Behind Krishi
                Mandi, Alwar 301001, Rajasthan
              </span>
              <br />
              <span className="text-xs">
                <span className="font-bold">Phone: </span>
                +917767678565
              </span>
            </div>
            <div className="max-w-xs">
              <h2 className="text-base font-bold">Payment Details</h2>
              <span className="text-sm text-gray-600">DEBIT CARD</span>
              <br />
              <span className="text-xs max-w-xs">Pratham Sharma</span>
              <br />
              <span className="text-xs">**** **** **** 1111</span>
              <br />
              <span className="text-xs">
                At 2:25:08 am, on August 18th 2022
              </span>
            </div>
          </div>
          {/* <div className="w-full h-0.5 bg-gray-300 rounded-full my-6"></div> */}

          <div className="px-2 py-4 border-y-2 border-gray-200 my-2">
            <table className="w-full">
              <thead className="text-base">
                <tr className="text-left">
                  <th>ITEM</th>
                  <th>QTY</th>
                  <th>PRICE</th>
                  <th>DISCOUNT PRICE</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody className="mt-8">
                <tr className="my-2">
                  <td>
                    <h3 className="text-sm">
                      Shruti Haasan Silver Queen Crown Ring
                    </h3>
                  </td>
                  <td>1</td>
                  <td>₹2999</td>
                  <td>₹999</td>
                  <td>₹999</td>
                </tr>
                <tr className="my-2">
                  <td>
                    <h3 className="text-sm">
                      Shruti Haasan Silver Queen Crown Ring
                    </h3>
                  </td>
                  <td>1</td>
                  <td>₹2999</td>
                  <td>₹999</td>
                  <td>₹999</td>
                </tr>
                <tr className="my-2">
                  <td>
                    <h3 className="text-sm">
                      Shruti Haasan Silver Queen Crown Ring
                    </h3>
                  </td>
                  <td>1</td>
                  <td>₹2999</td>
                  <td>₹999</td>
                  <td>₹999</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="w-full h-0.5 bg-gray-300 rounded-full my-6"></div> */}

          <div className="mt-4 flex justify-end">
            <div className="w-1/2">
              <div className="flex items-center justify-between my-2">
                <span className="font-bold text-primary-semi-light">
                  Subtotal
                </span>
                <span className="">₹2999</span>
              </div>
              <div className="flex items-center justify-between my-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Discount</span>
                  <span className="px-1 py-0.5 text-xs font-semibold rounded-full border border-gray-200">
                    OFF500
                  </span>
                </div>
                <span className="">-₹2999</span>
              </div>
              <div className="flex items-center justify-between my-2">
                <span className="font-bold">Gift Wrapping</span>
                <span className="">₹50</span>
              </div>
              <div className="flex items-center justify-between my-2">
                <span className="font-bold">Shipping</span>
                <span className="">Free Shipping</span>
              </div>

              <div className="flex items-center justify-between my-2 text-lg">
                <span className="font-bold">Total</span>
                <span className="">₹5999</span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="border-t-2 border-gray-200">
        {/* <div className="w-full h-0.5 bg-gray-200 rounded-full my-6"></div> */}
        <div className="mt-2">
          <p className="text-gray-500 text-sm">
            Payment terms are 14 days. Please be aware that according to the
            Late Payment of Unwrapped Debts Act 0000, freelancers are entitled
            to claim a 00.00 late fee upon non-payment of debts after this time,
            at which point a new invoice will be submitted with the addition of
            this fee. If payment of the revised invoice is not received within a
            further 14 days, additional interest will be charged to the overdue
            account and a statutory rate of 8% plus Bank of England base of
            0.5%, totalling 8.5%. Parties cannot contract out of the Act’s
            provisions.
          </p>
          <span className="my-3 text-xs font-extrabold text-primary">
            REALE GIOIELLERIA - {`\u{00A9}`} 2023
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Invoice;
