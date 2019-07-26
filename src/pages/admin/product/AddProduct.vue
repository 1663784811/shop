<template>
    <div class="addProduct">
        <div class="addBox clear_f">
            <div class="addBoxLeft">
                <div class="formRow">
                    <span class="fromName">标题:</span>
                    <Input placeholder="标题" v-model="productData.title"/>
                </div>
                <div class="formRow">
                    <span class="fromName">副标题:</span>
                    <Input placeholder="副标题" v-model="productData.subtitle"/>
                </div>

                <div class="formRow">
                    <span class="fromName">商品编号:</span>
                    <p>{{productData.productnum}}</p>
                </div>
                <div class="formRow">
                    <span class="fromName">分类:</span>
                    <Tag color="success"
                         closable
                         v-for="(classfication , key) in classficationArr"
                         @on-close="closeClassficationArrTagFn(key)"
                    >{{classfication}}
                    </Tag>
                    <Button icon="ios-add" type="dashed" size="small" @click="clickClassfication">添加分类</Button>
                </div>
                <div class="formRow">
                    <span class="fromName">促销:</span>
                    <Tag color="success"
                         closable
                         v-for="promotion in promotionArr"
                         :name="promotion"
                         @on-close="closeTagFn">
                        {{promotion}}
                    </Tag>
                    <Button icon="ios-add" type="dashed" size="small" @click="clickPromotion">添加促销</Button>
                </div>
                <div class="formRow">
                    <span class="fromName">参考价格:</span>
                    <InputNumber v-model="productData.price"></InputNumber>
                    ￥
                </div>
                <div class="formRow">
                    <span class="fromName">图片列表:</span>
                    <ul class="clear_f imageUl">
                        <li class="f_left imageLi" v-for="(imageLi , key ) in imageLiArr">
                            <Icon class="closeIcon" type="md-close-circle" @click="coloseImg(key)"/>
                            <img :src="imageLi.photo">
                        </li>
                        <li class="f_left imageLi" v-show="imageLiArr.length<5">
                            <div class="addClickBox" @click="addClickPhotoBox('imageLi')">
                                <Icon type="md-add"/>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="formRow">
                    <span class="fromName">参数:</span>
                    <ul class="selectColor">
                        <li class="iconBox">
                            <Icon class="add" type="md-add-circle" @click="clickAddIcon('parameter')"/>
                            <Icon class="reduce" type="md-remove-circle" @click="clickReduceIcon('parameter')"/>
                        </li>
                        <li class="colorLi clear_f" v-for="parameter in parameterArr">
                            <div class="parameterBox f_left">
                                <Input placeholder="参数名称" v-model="parameter.name"/>
                            </div>
                            <div class="parameterValue">
                                <Input placeholder="值" v-model="parameter.parametervalue"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="addBoxRight">
                <div class="formRow">
                    <span class="fromName">选择颜色:</span>
                    <ul class="selectColor">
                        <li class="iconBox">
                            <Icon class="add" type="md-add-circle" @click="clickAddIcon('colorObj')"/>
                            <Icon class="reduce" type="md-remove-circle" @click="clickReduceIcon('colorObj')"/>
                        </li>
                        <li class="colorLi clear_f" v-for="(colorObj , key) in colorArr">
                            <div class="imgBox f_left" v-if="colorObj.photo" @click="addClickPhotoBox('color',key)">
                                <img :src="colorObj.photo">
                            </div>
                            <div class="imgBox f_left" v-else>
                                <div class="addImgBox" @click="addClickPhotoBox('color',key)">
                                    <Icon type="md-add"/>
                                </div>
                            </div>
                            <div class="textBox">
                                <Input placeholder="颜色名称" v-model="colorObj.color"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="formRow">
                    <span class="fromName">选择版本:</span>
                    <ul class="selectColor">
                        <li class="iconBox">
                            <Icon class="add" type="md-add-circle" @click="clickAddIcon('edition')"/>
                            <Icon class="reduce" type="md-remove-circle" @click="clickReduceIcon('edition')"/>
                        </li>
                        <li class="colorLi clear_f" v-for="(edition ,key ) in editionArr">
                            <div class="textBox">
                                <Input placeholder="版本名称" v-model="editionArr[key]"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="formRow">
                    <span class="fromName">选择套餐:</span>
                    <ul class="selectColor">
                        <li class="iconBox">
                            <Icon class="add" type="md-add-circle" @click="clickAddIcon('aset')"/>
                            <Icon class="reduce" type="md-remove-circle" @click="clickReduceIcon('aset')"/>
                        </li>
                        <li class="colorLi clear_f" v-for="(aset ,key) in asetArr">
                            <div class="textBox">
                                <Input placeholder="套餐名称" v-model="asetArr[key]"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="formRow">
                    <span class="fromName">数量和价格:</span>
                    <ul class="selectColor">
                        <li class="iconBox">
                            <Icon class="add" type="md-add-circle" @click="clickAddIcon('countPrice')"/>
                            <Icon class="reduce" type="md-remove-circle" @click="clickReduceIcon('countPrice')"/>
                        </li>
                        <li class="colorLi clear_f">
                            <div class="selectLiBox clear_f">
                                <div class="selectLi selectLiName f_left">
                                    颜色
                                </div>
                                <div class="selectLi selectLiName f_left">
                                    版本
                                </div>
                                <div class="selectLi selectLiName f_left">
                                    套餐
                                </div>
                                <div class="selectLi selectLiName f_left">
                                    价格
                                </div>
                                <div class="selectLi selectLiName f_left">
                                    数量
                                </div>
                            </div>
                        </li>
                        <li class="colorLi clear_f" v-for="countPrice  in countPriceArr">
                            <div class="selectLiBox clear_f">
                                <div class="selectLi f_left">
                                    <Select v-model="countPrice.colorIndex">
                                        <Option v-for="( item,key ) in colorArr" :value="key"
                                                :key="key">
                                            {{item.color }}
                                        </Option>
                                    </Select>
                                </div>
                                <div class="selectLi f_left">
                                    <Select v-model="countPrice.edition">
                                        <Option v-for="( item, key ) in editionArr" :value="item" :key="key">
                                            {{item }}
                                        </Option>
                                    </Select>
                                </div>
                                <div class="selectLi f_left">
                                    <Select v-model="countPrice.aset">
                                        <Option v-for="( item,key ) in asetArr" :value="item" :key="key">
                                            {{item }}
                                        </Option>
                                    </Select>
                                </div>
                                <div class="selectLi f_left">
                                    <InputNumber style="width: 100%" v-model="countPrice.price"></InputNumber>
                                </div>
                                <div class="selectLi f_left">
                                    <InputNumber style="width: 100%" v-model="countPrice.count"></InputNumber>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="saveBox">
            <div class="container">
                <Button type="info" class="btn">预览</Button>
                <Button type="success"
                        class="btn"
                        @click="clickSave"
                        :loading="saveLoading"
                >保存
                </Button>
            </div>
        </div>

        <div class="detailsBox clear_f">
            <p class="fromName">详情:</p>
            <div class="editorBox" ref="editorBox"></div>
        </div>
        <SelectPhoto
                ref="selectPhotoRef"
                @clickSaveBtn="clickSaveBtn"
        ></SelectPhoto>

        <PanelListCheckbox
                :ajaxObj="findPageSClassification"
                ref="panelCheckboxRole"
                title="分类"
                @clickSaveBtn="clickSaveAddBtn"
                :selectData="PanelListCheckboxSelectData"
        ></PanelListCheckbox>

        <PanelListInput
                title="促销"
                ref="panelListInput"
                @clickSaveBtn="panelListInputFn"
        ></PanelListInput>
    </div>
</template>

<script>
    import E from 'wangeditor';
    import SelectPhoto from '../resources/SelectPhoto';
    import {API_Admin_addProduct} from '@/config/api/getData';
    import PanelListCheckbox from '@/components/common/PanelListCheckbox';
    import PanelListInput from '@/components/common/PanelListInput';
    import {
        API_findPageSClassification
    } from "@/config/api/sClassification";

    export default {
        name: "AddProduct",
        components: {
            SelectPhoto,
            PanelListCheckbox,
            PanelListInput
        },
        data() {
            return {
                arrIndex: 0,
                selectPhotoType: "",
                findPageSClassification: API_findPageSClassification,
                PanelListCheckboxSelectData: [],
                productData: {
                    title: "",
                    subtitle: "",
                    productnum: "",
                    author: "",
                    details: "",
                    price: 0
                },
                editor: null,
                imageLiArr: [],
                classficationArr: [],
                promotionArr: [],
                parameterArr: [{}],
                colorArr: [{
                    color: "",
                    photo: ""
                }],
                editionArr: [""],
                asetArr: [""],
                countPriceArr: [{}],
                saveLoading: false
            }
        },
        methods: {
            closeClassficationArrTagFn: function (index) {
                this.classficationArr.splice(index, 1);
            },
            coloseImg: function (index) {
                this.imageLiArr.splice(index, 1);
            },
            clickSaveBtn: function (objArr) {
                if (this.selectPhotoType === 'imageLi') {
                    for (let i = 0; i < objArr.length; i++) {
                        if (this.imageLiArr.length >= 5) {
                            break;
                        }
                        this.imageLiArr.push({photo: objArr[i]});
                    }
                } else if (this.selectPhotoType === 'color' && objArr.length > 0) {
                    this.$set(this.colorArr[this.arrIndex], 'photo', objArr[0]);
                }
                this.$refs.selectPhotoRef.setSelectArr();
                this.$refs.selectPhotoRef.setShowWindow();
            },
            panelListInputFn: function (str) {
                if (str && str !== "") {
                    this.$refs.panelListInput.setShow();
                    this.promotionArr.push(str);
                } else {
                    this.$Message.error("请输入内容")
                }
            },
            closeTagFn: function (event, name) {
                let index = this.promotionArr.indexOf(name);
                this.promotionArr.splice(index, 1);
            },

            clickSaveAddBtn: function (objArr) {
                for (let i = 0; i < objArr.length; i++) {
                    if (this.classficationArr.indexOf(objArr[i].name) === -1) {
                        this.classficationArr.push(objArr[i].name);
                    }
                }
                this.$refs.panelCheckboxRole.setShow(false);
            },

            clickSave: function () {
                let productData = this.productData;
                productData.classification = this.classficationArr.join(',');
                productData.promote = this.promotionArr.join(',');
                productData.photo = this.imageLiArr.length === 0 ? "" : this.imageLiArr[0].photo;

                let countPriceArr = [];
                for (let i = 0; i < this.countPriceArr.length; i++) {
                    let js = this.countPriceArr[i];
                    let colorIndex = js.colorIndex;
                    js.color = this.colorArr[colorIndex].color;
                    js.photo = this.colorArr[colorIndex].photo;
                    countPriceArr.push(js);
                }

                // 收集数据
                let json = {
                    sProduct: productData,
                    sProductphotoList: this.imageLiArr,
                    sParameterList: this.parameterArr,
                    sSelectcolorList: this.countPriceArr
                };
                this.saveLoading = true;
                API_Admin_addProduct(json).then(res => {
                    this.$Notice.success({title: "保存成功"});
                    this.saveLoading = false;
                }).then(res => {
                    this.saveLoading = false;
                    this.$Notice.error({title: "保存失败", desc: res});
                })
            },


            clickAddIcon: function (arrStr) {
                switch (arrStr) {
                    case 'parameter':
                        this.parameterArr.push({});
                        break;
                    case 'colorObj':
                        this.colorArr.push({
                            color: "",
                            photo: ""
                        });
                        break;
                    case 'edition':
                        this.editionArr.push("");
                        break;
                    case 'aset':
                        this.asetArr.push("");
                        break;
                    case 'countPrice':
                        this.countPriceArr.push({});
                        break;
                }
            },
            clickReduceIcon: function (arrStr) {
                switch (arrStr) {
                    case 'parameter':
                        if (this.parameterArr.length > 1) {
                            this.parameterArr.pop();
                        }
                        break;
                    case 'colorObj':
                        if (this.colorArr.length > 1) {
                            this.colorArr.pop();
                        }
                        break;
                    case 'edition':
                        if (this.editionArr.length > 1) {
                            this.editionArr.pop();
                        }
                        break;
                    case 'aset':
                        if (this.asetArr.length > 1) {
                            this.asetArr.pop();
                        }
                        break;
                    case 'countPrice':
                        if (this.countPriceArr.length > 1) {
                            this.countPriceArr.pop();
                        }
                        break;
                }
            },

            clickClassfication: function () {
                this.$refs.panelCheckboxRole.setShow(true);
                this.$refs.panelCheckboxRole.ajaxRequest();
            },
            clickPromotion: function () {
                this.$refs.panelListInput.setValueStr();
                this.$refs.panelListInput.setShow(true);
            },
            addClickPhotoBox: function (imgType, arrIndex) {
                this.selectPhotoType = imgType;
                this.arrIndex = arrIndex;
                this.$refs.selectPhotoRef.setShowWindow(true);
                this.$refs.selectPhotoRef.loadingList();
            }
        },
        mounted() {
            this.editor = new E(this.$refs.editorBox);
            this.editor.customConfig.onchange = (html) => {
                this.productData.details = html;
            };
            this.editor.create();
            document.getElementsByClassName("w-e-text-container")[0].style.height = "700px";
            this.editor.txt.html(this.productData.details);
        }
    }

</script>

<style scoped lang="stylus">
    @import "AddProductCss.styl"
</style>
