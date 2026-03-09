            <main class="h-full overflow-y-auto pb-6">
                <div class="container px-6 mx-auto grid">
                    <div class="flex justify-between items-center space-x-4 text-sm my-7">
                        <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300"><?= (!empty($portfolio))?'Edit':'New'; ?> Item</h4>
                        <a href="<?= base_url(); ?>/backend/portfolio" class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow">Back</a>
                    </div>
                    <label class="block"><?= @session()->getFlashdata('msg').((!empty($validation))?alerttag($validation->listErrors(),'red'):''); ?></label>
                    <form action="" method="post" class="px-6 py-6 bg-white rounded-lg shadow-md dark:bg-gray-800 bannerfrm" enctype="multipart/form-data">
                        <input type="hidden" name="pid" value="<?= (@$portfolio->pid>0)?$portfolio->pid:''; ?>">
                        <div class="grid md:grid-cols-2 gap-4">
                            <label class="block text-sm">
                                <span class="reqinp text-gray-700 dark:text-gray-400">Category</span>
                                <select name="category" class="select2 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray" required>
                                    <option value="" selected disabled hidden>Select Category</option>
                                    <?php if(!empty($category)){ foreach ($category as $key => $value) { ?>
                                    <option value="<?= @$value->cid; ?>"<?= (@$value->cid==((set_value('category')!='')?set_value('category'):@$portfolio->fkcid))?' selected':''; ?>><?= @$value->cname; ?></option>
                                    <?php } } ?>
                                </select>
                            </label>
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Title</span>
                                <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="title" value="<?= (@set_value('title')!='')?@set_value('title'):@$portfolio->ptitle; ?>">
                            </label>
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Link</span>
                                <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="plink" value="<?= (@set_value('plink')!='')?@set_value('plink'):@$portfolio->plink; ?>">
                            </label>
                            <div>
                                <label class="block text-sm mb-1"><span class="text-gray-700 dark:text-gray-400">Media (jpeg/jpg/png/webp)</span></label>
                                <input type="file" tabindex="4" name="pimg"<?= (@$portfolio->pimg!='' && @$portfolio->pimg!=0)?'':' required'; ?> id="fup">
                            </div>
                        </div>
                        <label class="flex items-center justify-end dark:text-gray-400 flex-wrap mt-4">
                            <span class="mr-3">Show only in home page</span>
                            <input type="checkbox" name="home" value="1" class="w-6 h-6 text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple peer dark:focus:shadow-outline-gray"<?= (((@set_value('home')!='')?@set_value('home'):@$portfolio->home) == '1')?' checked':''; ?> />
                            <div class="hidden peer-checked:grid md:grid-cols-2 gap-4 mt-4 w-full">
                                <label class="block text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Title</span>
                                    <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="htitle" value="<?= (@set_value('htitle')!='')?@set_value('htitle'):@$portfolio->phtitle; ?>">
                                </label>
                                <label class="block text-sm">
                                    <span class="text-gray-700 dark:text-gray-400">Sub Title</span>
                                    <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="hsubtitle" value="<?= (@set_value('hsubtitle')!='')?@set_value('hsubtitle'):@$portfolio->phsubtitle; ?>">
                                </label>
                            </div>
                        </label>
                        <div class="text-right">
                            <button tabindex="5" type="submit" class="px-5 py-3 mt-6 text-sm font-medium text-center text-white transition-colors duration-150 bg-green-900 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
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
        <?php if(!empty($portfolio) && @$portfolio->pimg!='' && @$portfolio->pimg!=0) { ?>
        initialPreview: [
            "<img src='<?= base_url('/assets/uploads/'.@$portfolio->pimg); ?>' class='file-preview-image' alt='image' title='<?= @$portfolio->pimg; ?>'>",
        ],
        initialPreviewConfig: [
            {caption: "<?= @$portfolio->pimg; ?>", size: "<?= @filesize('./assets/uploads/'.@$portfolio->pimg); ?>", key: 1}
        ]
        <?php } ?>
    });
    </script>