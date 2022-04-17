import React from 'react'

const Blogs = () => {
    return (
        <article>
            <h2 className='mb-3'>অথোরাইজেশন এবং অথেন্টিকেশন এর মধ্যে পার্থক্য কি?</h2>
            <h5 className='mb-4'>
                অথেন্টিকেশন হল কোনো application এ ইউজার আইডি এবং পাসওয়ার্ড এর মাধ্যমে নিজের পরিচয়কে ভেরিফাই করা।

                কোন একটা অ্যাপ্লিকেশনে ইউজার অথেন্টিকেট হওয়ার পর সেই অ্যাপ্লিকেশনের কোন কোন রিসোর্স ইউজার ব্যবহার করতে পারবে এবং কোন কোন ডাটা এর এক্সেস নিতে পারবে সেই পারমিশন দেওয়ার এর নামই হলো অথোরাইজেশন। </h5>

            <h2 className='mb-3'>কেন ফায়ারবেজ ইউজ করা হয় এবং অথেন্টিকেশন এর জন্য ফায়ারবেজ ছাড়া আর কোন কোন এপ্লিকেশন আছে??
            </h2>
            <h5 className='mb-4'>ফায়ারবেজ হলো গুগল ব্যাক এন্ড এস এ সার্ভিস (Google's Baas) এবং এটা ওয়েবসাইট এবং মোবাইল অ্যাপের hoisting and authentication er জন্য একটা আদর্শ প্লাটফর্ম। এবং এটা প্রাথমিক ভাবে কিছু প্রজেক্ট ফ্রি তে authentication ইউজ করা যায়।

                ফায়ারবেজ ছাড়া ও নিচের সাইট গুলোর মাধ্যমে authentication করা যায়।

                1- Auth0

                2- Okta

                3- Amazon Cognito

                4- Json Web Token</h5>

            <h2 className='mb-3'>অথেন্টিকেশন ছাড়া ফায়ার বেস দিয়ে আর কি কি করা যায়?</h2>
            <h5 className='mb-4'>অথেন্টিকেশন ছাড়া ফায়ার বেস দিয়ে আরো অনেকগুলো কাজ করা যায়।
                যেমন

                1- cloud firestore

                2- Google analytics

                3- cloud functions

                4- hoisting

                5- cloud storage

                6- real time database

                7- dynamic link</h5>
        </article>
    )
}

export default Blogs