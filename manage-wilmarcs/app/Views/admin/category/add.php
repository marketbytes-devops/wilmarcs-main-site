            <main class="h-full overflow-y-auto pb-6">
                <div class="container px-6 mx-auto grid">
                    <div class="flex justify-between items-center space-x-4 text-sm my-7">
                        <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300"><?= ((!empty($category))?'Edit ':'New ').@$pg; ?> category</h4>
                        <a href="<?= base_url('backend/'.@$pg.'/category'); ?>" class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow">Back</a>
                    </div>
                    <label class="block"><?= @session()->getFlashdata('msg').((!empty($validation))?alerttag($validation->listErrors(),'red'):''); ?></label>
                    <form action="" method="post" class="px-6 py-6 bg-white rounded-lg shadow-md dark:bg-gray-800 bannerfrm" enctype="multipart/form-data">
                        <input type="hidden" name="cid" value="<?= (@$category->cid>0)?$category->cid:''; ?>">
                        <div class="grid gap-4 mb-4">
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Name</span>
                                <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="name" value="<?= (@set_value('name')!='')?@set_value('name'):@$category->cname; ?>" required>
                                <input type="hidden" name="oldtitle" value="<?= @$category->cname; ?>">
                            </label>
                            <?php if (@$pg=='services') { ?>
                            <label class="block text-sm">
                                <span class="text-gray-700 dark:text-gray-400">Description</span>
                                <input class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:text-gray-300 dark:focus:shadow-outline-gray form-input" name="desc" value="<?= (@set_value('desc')!='')?@set_value('desc'):@$category->cdesc; ?>" required>
                            </label>
                            <div>
                                <label class="block text-sm mb-1"><span class="text-gray-700 dark:text-gray-400">Media (jpeg/jpg/png/webp)</span></label>
                                <input type="file" tabindex="4" name="cimg"<?= (@$category->cimg!='' && @$category->cimg!=0)?'':' required'; ?> id="fup">
                            </div>
                            <?php } ?>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="px-5 py-3 mt-4 text-sm font-medium text-center text-white transition-colors duration-150 bg-green-900 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    <?php if (@$pg=='services') { ?>
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
        <?php if(!empty($category) && @$category->cimg!='' && @$category->cimg!=0) { ?>
        initialPreview: [
            "<img src='<?= base_url('/assets/uploads/'.@$category->cimg); ?>' class='file-preview-image' alt='image' title='<?= @$category->cimg; ?>'>",
        ],
        initialPreviewConfig: [
            {caption: "<?= @$category->cimg; ?>", size: "<?= @filesize('./assets/uploads/'.@$category->cimg); ?>", key: 1}
        ]
        <?php } ?>
    });
    </script>
    <?php } ?>