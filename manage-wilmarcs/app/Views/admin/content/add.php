            <main class="h-full overflow-y-auto pb-6">
                <div class="container px-6 mx-auto grid">
                    <div class="flex justify-between items-center space-x-4 text-sm my-7">
                        <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300"><?= (!empty($content))?'Edit':'New'; ?> Content</h4>
                        <a href="<?= base_url(); ?>/backend/content" class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow">Back</a>
                    </div>
                    <label class="block"><?= @session()->getFlashdata('msg').((!empty($validation))?alerttag($validation->listErrors(),'red'):''); ?></label>
                    <form action="" method="post" class="px-6 py-6 bg-white rounded-lg shadow-md dark:bg-gray-800 bannerfrm" enctype="multipart/form-data">
                        <input type="hidden" name="cid" value="<?= (@$content->cid>0)?$content->cid:''; ?>">
                        <div class="grid md:grid-cols-1 mb-4">
                            <label class="block text-sm mb-4">
                                <span class="text-gray-700 dark:text-gray-400">Page</span>
                                <input class="block w-full mt-1 text-sm bg-blue-500 border-0 focus:outline-none text-center text-white form-input" readonly name="page" value="<?= (@set_value('page')!='')?@set_value('page'):@$content->page; ?>">
                            </label>
                            <div class="grid md:grid-cols-2 gap-6 mb-6">
                                <label class="text-sm m">
                                    <span class="text-gray-700 dark:text-gray-400">Title</span>
                                    <input required class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="seotitle" value="<?= (@set_value('seotitle')!='')?@set_value('seotitle'):@$content->seotitle; ?>">
                                </label>
                                <label class="text-sm m">
                                    <span class="text-gray-700 dark:text-gray-400">Keywords</span>
                                    <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="seokeywords" value="<?= (@set_value('seokeywords')!='')?@set_value('seokeywords'):@$content->seokeywords; ?>">
                                </label>
                            </div>
                            <label class="text-sm mb-4">
                                <span class="text-gray-700 dark:text-gray-400 mb-1 block">Description</span>
                                <textarea class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray" name="seodesc" rows="5"><?= (@set_value('seodesc')!='')?@set_value('seodesc'):@$content->seodesc; ?></textarea>
                            </label>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="px-5 py-3 mt-4 text-sm font-medium text-center text-white transition-colors duration-150 bg-green-900 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>