import fs from 'fs';
import {
  Award,
  Briefcase,
  Calendar,
  Cloud,
  Container,
  Database,
  GitBranch,
  Github,
  GraduationCap,
  Mail,
  Phone,
  Server,
  Terminal,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

interface PostMetadata {
  title?: string;
  description?: string;
  image?: string;
}

export default async function Home() {
  // MDX 파일 읽기
  let posts: Array<{ slug: string; metadata: PostMetadata }> = [];

  try {
    const dir = path.join(process.cwd(), 'src', 'content');

    // 디렉토리 존재 여부 확인
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

      posts = await Promise.all(
        mdxFiles.map(async (file) => {
          const slug = file.replace(/\.mdx$/, '');
          try {
            const mod = await import(`../content/${slug}.mdx`);
            return { slug, metadata: mod.metadata || {} };
          } catch (error) {
            console.error(`Error importing ${slug}.mdx:`, error);
            return {
              slug,
              metadata: {
                src: `/img/${slug}.jpg`,
                description: '설명이 없습니다.',
                image: '',
              },
            };
          }
        }),
      );
    }
  } catch (error) {
    console.error('Error reading content directory:', error);
  }

  return (
    <div className='w-full flex flex-col items-center px-4 py-8'>
      <div className='max-w-6xl w-full'>
        {/* 개인 소개 섹션 */}
        <section className='mb-16'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              소통하는 개발자
              <br />
              박현욱 입니다.
            </h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 text-lg'>
              <div className='flex items-center gap-2'>
                <Phone className='w-5 h-5' />
                <span>010-8912-4621</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='w-5 h-5' />
                <span>jisaki07@gmail.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <Github className='w-5 h-5' />
                <a href='https://github.com/hyun071111'>
                  <span>hyun071111</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>기술 스택</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-4'>언어</h3>
              <div className='flex justify-center gap-4'>
                <div className='w-16 h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center hover:bg-blue-200 transition-colors'>
                  <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center mb-1'>
                    <span className='text-white font-bold text-sm'>Py</span>
                  </div>
                  <span className='text-xs font-bold text-blue-600'>
                    Python
                  </span>
                </div>
                <div className='w-16 h-16 bg-yellow-100 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-200 transition-colors'>
                  <div className='w-8 h-8 bg-yellow-500 rounded flex items-center justify-center mb-1'>
                    <span className='text-black font-bold text-sm'>JS</span>
                  </div>
                  <span className='text-xs font-bold text-yellow-600'>
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-4'>프레임워크</h3>
              <div className='flex justify-center gap-4'>
                <div className='w-16 h-16 bg-gray-100 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition-colors'>
                  <Server className='w-8 h-8 text-gray-600 mb-1' />
                  <span className='text-xs font-bold text-gray-600'>Flask</span>
                </div>
                <div className='w-16 h-16 bg-green-100 rounded-lg flex flex-col items-center justify-center hover:bg-green-200 transition-colors'>
                  <Zap className='w-8 h-8 text-green-600 mb-1' />
                  <span className='text-xs font-bold text-green-600'>
                    FastAPI
                  </span>
                </div>
                <div className='w-16 h-16 bg-emerald-100 rounded-lg flex flex-col items-center justify-center hover:bg-emerald-200 transition-colors'>
                  <div className='w-8 h-8 bg-emerald-600 rounded flex items-center justify-center mb-1'>
                    <span className='text-white font-bold text-xs'>E</span>
                  </div>
                  <span className='text-xs font-bold text-emerald-600'>
                    Express
                  </span>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-4'>
                클라우드 & 데브옵스
              </h3>
              <div className='flex justify-center gap-4'>
                <div className='w-16 h-16 bg-orange-100 rounded-lg flex flex-col items-center justify-center hover:bg-orange-200 transition-colors'>
                  <Cloud className='w-8 h-8 text-orange-600 mb-1' />
                  <span className='text-xs font-bold text-orange-600'>AWS</span>
                </div>
                <div className='w-16 h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center hover:bg-blue-200 transition-colors'>
                  <Container className='w-8 h-8 text-blue-600 mb-1' />
                  <span className='text-xs font-bold text-blue-600'>
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-8 mt-8'>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-4'>데이터베이스</h3>
              <div className='flex justify-center gap-4'>
                <div className='w-16 h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center hover:bg-blue-200 transition-colors'>
                  <Database className='w-8 h-8 text-blue-600 mb-1' />
                  <span className='text-xs font-bold text-blue-600'>MySQL</span>
                </div>
                <div className='w-16 h-16 bg-green-100 rounded-lg flex flex-col items-center justify-center hover:bg-green-200 transition-colors'>
                  <Database className='w-8 h-8 text-green-600 mb-1' />
                  <span className='text-xs font-bold text-green-600'>
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-4'>
                운영체제 / 개발 환경
              </h3>
              <div className='flex justify-center gap-4'>
                <div className='w-16 h-16 bg-slate-100 rounded-lg flex flex-col items-center justify-center hover:bg-slate-200 transition-colors'>
                  <Terminal className='w-8 h-8 text-slate-600 mb-1' />
                  <span className='text-xs font-bold text-slate-600'>
                    Linux
                  </span>
                </div>
                <div className='w-16 h-16 bg-red-100 rounded-lg flex flex-col items-center justify-center hover:bg-red-200 transition-colors'>
                  <GitBranch className='w-8 h-8 text-red-600 mb-1' />
                  <span className='text-xs font-bold text-red-600'>Git</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 학력 섹션 */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
            <GraduationCap className='w-6 h-6' />
            학력사항
          </h2>
          <div className='space-y-4'>
            <div className='border-l-4 border-blue-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2023.03 ~ 현재</span>
              </div>
              <p className='font-semibold'>서울디지텍고등학교</p>
              <p className='text-sm text-gray-600'>인공지능소프트웨어과</p>
            </div>
            <div className='border-l-4 border-blue-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2020.03 ~ 2022.12</span>
              </div>
              <p className='font-semibold'>중앙대학교사범대학부속중학교</p>
            </div>
          </div>
        </section>

        {/* 활동 및 경력 섹션 */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
            <Briefcase className='w-6 h-6' />
            활동사항
          </h2>
          <div className='space-y-4'>
            <div className='border-l-4 border-purple-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2024.11.01</span>
              </div>
              <p className='font-semibold'>
                습지와 온도 상관관계 분석 웹페이지 개발 및 데모데이 우수 운영
              </p>
              <p className='text-sm text-gray-600'>해동빌딩 스테이지</p>
            </div>
            <div className='border-l-4 border-purple-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>
                  2024.12.20 ~ 2024.12.24
                </span>
              </div>
              <p className='font-semibold'>AWS 코리아의 AWS 강의 수강</p>
              <p className='text-sm text-gray-600'>멘티</p>
            </div>
            <div className='border-l-4 border-purple-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2024.03 ~ 현재</span>
              </div>
              <p className='font-semibold'>서울디지털고 해킹보안 동아리 ROOT</p>
              <p className='text-sm text-gray-600'>부회장</p>
            </div>
          </div>
        </section>

        {/* 수상 및 자격 섹션 */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
            <Award className='w-6 h-6' />
            수상 및 자격사항
          </h2>
          <div className='space-y-4'>
            <div className='border-l-4 border-yellow-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2025.05.09</span>
              </div>
              <p className='font-semibold'>
                2025 용산구 공공데이터 활용 스마트도시 아이디어 공모전 우수상
              </p>
              <p className='text-sm text-gray-600'>용산구청</p>
            </div>
            <div className='border-l-4 border-yellow-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2024.12.19</span>
              </div>
              <p className='font-semibold'>SW 동행 데모데이 대상</p>
              <p className='text-sm text-gray-600'>과학기술정보통신부</p>
            </div>
            <div className='border-l-4 border-yellow-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2024.12.19</span>
              </div>
              <p className='font-semibold'>
                공간정보 웹/앱 활용 경진대회 최우수상
              </p>
              <p className='text-sm text-gray-600'>서울디지털고등학교</p>
            </div>
            <div className='border-l-4 border-yellow-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2024.11.22</span>
              </div>
              <p className='font-semibold'>공간정보 골든벨 최우수상</p>
              <p className='text-sm text-gray-600'>서울디지털고등학교</p>
            </div>
            <div className='border-l-4 border-yellow-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2024.11.01</span>
              </div>
              <p className='font-semibold'>SW 동행 프로젝트 특별상</p>
              <p className='text-sm text-gray-600'>한국교육방송공사</p>
            </div>
            <div className='border-l-4 border-yellow-500 pl-4'>
              <div className='flex items-center gap-2 mb-1'>
                <Calendar className='w-4 h-4' />
                <span className='text-sm text-gray-600'>2024.05.27</span>
              </div>
              <p className='font-semibold'>해킹보안전문가 3급</p>
              <p className='text-sm text-gray-600'>한국해킹보안협회</p>
            </div>
          </div>
        </section>

        {/* 블로그 포스트 섹션 */}
        <section>
          <h2 className='text-3xl font-bold text-center mb-8'>
            최근 블로그 포스트
          </h2>
          {posts.length > 0 ? (
            <div className='grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 grid'>
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className='border border-black/10 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                  <Image
                    src={
                      post.metadata.image ||
                      `/placeholder.svg?height=630&width=1200`
                    }
                    alt={post.metadata.title || post.slug}
                    className='w-full object-cover rounded-t-lg mb-4 aspect-[1200/630]'
                    width={1200}
                    height={630}
                  />
                  <div className='p-4'>
                    <h3 className='text-xl font-bold mb-2'>
                      <Link
                        href={`/posts/${post.slug}`}
                        className='hover:text-purple-600 transition-colors'>
                        {post.metadata.title || post.slug}
                      </Link>
                    </h3>
                    <p className='text-gray-600 mb-4'>
                      {post.metadata.description || '설명이 없습니다.'}
                    </p>
                    <Link
                      href={`/posts/${post.slug}`}
                      className='text-purple-500 hover:underline font-medium'>
                      자세히 보기 →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center text-gray-500'>
              <p>아직 블로그 포스트가 없습니다.</p>
              <p className='text-sm mt-2'>
                src/content 디렉토리에 MDX 파일을 추가해주세요.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
