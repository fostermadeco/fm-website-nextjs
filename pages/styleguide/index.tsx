import Link from 'next/link';
import React from 'react';
import Arrow from '../../components/Arrow';

const StyleGuidePage = () => (
    <div className="container py-10 mx-auto">
        <h2 className="text-center h5 overline">Typography</h2>
        <hr className="my-8" />
        <h2 className="mt-8 h5 overline">h1</h2>
        <h1 className="h1">We're glad to be here, working with you.</h1>
        <h2 className="mt-8 h5 overline">h2</h2>
        <h2 className="h2">We're glad to be here, working with you.</h2>
        <h2 className="mt-8 h5 overline">h3</h2>
        <h3 className="h3">We're glad to be here, working with you.</h3>
        <h2 className="mt-8 h5 overline">h4</h2>
        <h4 className="h4">We're glad to be here, working with you.</h4>
        <h2 className="mt-8 h5 overline">h5</h2>
        <h5 className="h5">We're glad to be here, working with you.</h5>

        <h5 className="mt-8 h5 overline">Overline</h5>
        <h5 className="h5 overline">Solutions</h5>
        <h2 className="mt-8 h5 overline">Paragraph</h2>
        <p className="mb-6">
            Our work is both high-tech and personal. We apply our knowledge of complex digital solutions to help real
            people solve real problems. From smart design to strategic programming,​ we employ technology as a medium
            for advancing your business and making human connections.
        </p>

        <h2 className="mt-8 h5 overline">Paragraph extra-large</h2>
        <p className="p-xl">
            Our work is both high-tech and personal. We apply our knowledge of complex digital solutions to help real
            people solve real problems. From smart design to strategic programming,​ we employ technology as a medium
            for advancing your business and making human connections.
        </p>

        <hr className="my-8" />
        <h2 className="h5 overline">Prose</h2>
        <div className="prose prose-lg md:prose-xl">
            <h2 className="h2">h2 We're glad to be here, working with you.</h2>
            <h3 className="h3">h3 We're glad to be here, working with you.</h3>
            <h4 className="h4">h4 We're glad to be here, working with you.</h4>
            <h5 className="h5">h5 We're glad to be here, working with you.</h5>
            <h6 className="h6">h5 We're glad to be here, working with you.</h6>
            <h6 className="h6">h6 We're glad to be here, working with you.</h6>
            <h6 className="h4">
                <a href="#">We're glad to be here, working with you.</a>
            </h6>
        </div>

        <hr className="my-8" />
        <h2 className="h5 overline">Links</h2>
        <div className="mb-6">
            <Link href="#">
                <a className="border-b-in">Arts &amp; Culture</a>
            </Link>
        </div>
        <div className="mb-6">
            <Link href="#">
                <a className="border-b-in h4">Arts &amp; Culture</a>
            </Link>
        </div>
        <div className="mb-6">
            <Link href="#">
                <a className="test emdash-in h5">Read More</a>
            </Link>
        </div>

        <hr className="my-8" />
        <h2 className="h5 overline">Arrows</h2>
        <div>
            <Arrow />
            <Arrow direction="down" />
            <Arrow direction="left" />
            <Arrow direction="up" />
        </div>
    </div>
);

export default StyleGuidePage;
