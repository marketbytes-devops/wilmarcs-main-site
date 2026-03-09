            <main class="h-full overflow-y-auto pb-6">
                <div class="container px-6 mx-auto grid">
                    <div class="flex justify-between items-center space-x-4 text-sm my-7">
                        <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300"><?= (!empty($blog))?'Edit':'New'; ?> Blog</h4>
                        <a href="<?= base_url(); ?>/backend/blog" class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow">Back</a>
                    </div>
                    <label class="block"><?= @session()->getFlashdata('msg').((!empty($validation))?alerttag($validation->listErrors(),'red'):''); ?></label>
                    <form action="" method="post" class="px-6 py-6 bg-white rounded-lg shadow-md dark:bg-gray-800 bannerfrm" enctype="multipart/form-data">
                        <input type="hidden" name="bid" value="<?= (@$blog->bid>0)?$blog->bid:''; ?>">
                        <div class="grid md:grid-cols-2 gap-4 mb-4">
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Title</span>
                                <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="title" value="<?= (@set_value('title')!='')?@set_value('title'):@$blog->bltitle; ?>" required>
                            </label>
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Date</span>
                                <input class="datepick block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="bldt" type="text" data-val="<?= (@set_value('bldt')!='')?date('d-m-Y H:i:s', strtotime(@set_value('bldt'))):((@$blog->bldt!='')?date('d-m-Y H:i:s',strtotime(@$blog->bldt)):''); ?>" required>
                            </label>
                            <label class="block text-sm">
                                <span class="reqinp text-gray-700 dark:text-gray-400">Category</span>
                                <select tabindex="3" name="category" class="select2 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray" required>
                                    <option value="" selected disabled hidden>Select Category</option>
                                    <?php if(!empty($category)){ foreach ($category as $key => $value) { ?>
                                    <option value="<?= @$value->cid; ?>"<?= (@$value->cid==((set_value('category')!='')?set_value('category'):@$blog->fkcid))?' selected':''; ?>><?= @$value->cname; ?></option>
                                    <?php } } ?>
                                </select>
                            </label>
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Tags</span>
                                <select tabindex="2" tags="true" multiple name="btags[]" data-placeholder="Select or enter tags" class="select2tags block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray">
                                    <?php $btags = explode(',', @$blog->btags); foreach ($tags as $key => $value) { ?>
                                    <option value="<?= @$value->tag; ?>"<?= in_array(@$value->tag, $btags)?' selected':''; ?>><?= @$value->tag; ?></option>
                                    <?php } ?>
                                </select>
                            </label>
                        </div>
                        <label class="block text-sm mb-4">
                            <span class="text-gray-700 dark:text-gray-400">Excerpt</span>
                            <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="excerpt" value="<?= (@set_value('excerpt')!='')?@set_value('excerpt'):@$blog->bexcerpt; ?>" required>
                        </label>
                        <label class="block text-sm mb-4">
                            <span class="text-gray-700 dark:text-gray-400 mb-1 block">Description</span>
                            <textarea class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray" id="editor" name="bldesc" rows="5"><?= (@set_value('bldesc')!='')?@set_value('bldesc'):@$blog->bldesc; ?></textarea>
                        </label>
                        <div class="mb-4">
                            <label class="block text-sm mb-1"><span class="text-gray-700 dark:text-gray-400">Image</label>
                            <input type="file" name="blimg"<?= (@$blog->blimg!='' && @$blog->blimg!=0)?'':' required'; ?> id="fup">
                        </div>
                        <h4 class="text-base font-medium border-b dark:border-gray-600 mb-4 pb-2 text-gray-700 dark:text-gray-300">SEO</h4>
                        <div class="grid md:grid-cols-2 gap-4 mb-4">
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Title</span>
                                <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="seotitle" value="<?= (@set_value('seotitle')!='')?@set_value('seotitle'):@$blog->seotitle; ?>" required>
                            </label>
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Keywords</span>
                                <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="seokeywords" value="<?= (@set_value('seokeywords')!='')?@set_value('seokeywords'):@$blog->seokeywords; ?>">
                            </label>
                        </div>
                        <label class="block text-sm mb-4">
                            <span class="text-gray-700 dark:text-gray-400 mb-1 block">Description</span>
                            <textarea class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray" name="seodesc" rows="5"><?= (@set_value('seodesc')!='')?@set_value('seodesc'):@$blog->seodesc; ?></textarea>
                        </label>
                        <div class="text-right">
                            <button type="submit" class="px-5 py-3 mt-4 text-sm font-medium text-center text-white transition-colors duration-150 bg-green-900 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script>
    $("#fup").fileinput({
        uploadUrl: "/",
        autoReplace: true,
        maxFileCount: 1,
        allowedFileExtensions: ["jpg", "jpeg", "png", "webp"],
        browseClass: "px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue text-center inline-block",
        showCaption: false,
        showRemove: false,
        dropZoneEnabled: false,
        showClose: true,
        showUpload: false,
        <?php if(!empty($blog) && @$blog->blimg!='' && @$blog->blimg!=0) { ?>
        initialPreview: [
            "<img src='<?= base_url('assets/uploads/'.@$blog->blimg); ?>' class='file-preview-image' alt='image' title='<?= @$blog->blimg; ?>'>",
        ],
        initialPreviewConfig: [
            {caption: "<?= @$blog->blimg; ?>", size: "<?= @filesize('./assets/uploads/'.@$blog->blimg); ?>", key: 1}
        ]
        <?php } ?>
    });
    if ($('.datepick').length) {
        $('.datepick').val(($('.datepick').attr('data-val')=='')?moment().format('DD-MM-Y'):$('.datepick').attr('data-val'));
        $('.datepick').flatpickr({
            enableTime: false,
            dateFormat: 'd-m-Y',
            monthSelectorType: 'static',
            disableMobile: false,
        });
    }
    </script>