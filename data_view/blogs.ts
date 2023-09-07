interface Blogs_dataProps {
    id: number
    title: string
    blog_text: string
}

export const Blogs_data: Blogs_dataProps[] = [
    {
        id: 1,
        title: 'Grozny_Blog Production',
        blog_text: 'Permission is hereby granted, free of charge, to any person obtaining a copy\n' +
            'of this software and associated documentation files (the "Software"), to deal\n' +
            'in the Software without restriction, including without limitation the rights\n' +
            'to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n' +
            'copies of the Software, and to permit persons to whom the Software is\n' +
            'furnished to do so, subject to the following conditions:'
    },
    {
        id: 2,
        title: 'Any info about portions of the Software',
        blog_text: 'The above copyright notice and this permission notice shall be included in all\n' +
            'copies or substantial portions of the Software.'
    },
    {
        id: 3,
        title: 'THE SOFTWARE PROVIDED',
        blog_text: 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
            'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n' +
            'FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n' +
            'AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n'
    },
    {
        id: 4,
        title: 'MIT License',
        blog_text: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices.\n' +
            'Licensed works, modifications, and larger works may be distributed under different terms and without source code'
    },
    {
        id: 5,
        title: 'LIABILITY',
        blog_text: ' \'LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\' +\n' +
            '  \'OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\' +\n' +
            '  \'SOFTWARE.\''
    }
]