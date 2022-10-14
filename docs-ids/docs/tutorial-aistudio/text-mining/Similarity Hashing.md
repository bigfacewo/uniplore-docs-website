---
sidebar_position: 2
---
### 组件介绍
**“相似度哈希（Similarity Hashing）”**控件用于计算给定语料库的相似哈希。
<hr/>

- 输入：
  - cor：文本数据集
- 输出：
  - cor：文本数据集

<hr/>


### 页面介绍
点击**“相似度哈希（Similarity Hashing）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/text-mining/similarity-hash/param.png) ](/img/aistudio/text-mining/similarity-hash/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>Simhash 大小</td> 
      <td>
      输出属性个数，取值范围为 1-1024
      </td> 
      <td>64</td>
  </tr>
  <tr>
      <td>Shingle 长度</td> 
      <td>
      取值范围为 1-100
      </td> 
      <td>10</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载语料库（Corpus）”**控件加载文本数据集，连接**“相似度哈希（Similarity Hashing）”**控件对数据进行处理，使用**“查看数据（Data Table）”**控件查看处理后的数据。  
[ ![](/img/aistudio/text-mining/similarity-hash/workflow.png) ](/img/aistudio/text-mining/similarity-hash/workflow.png)

案例中加载“andersen”数据集，其余控件使用默认参数，案例中控件的配置以及执行结果如下图所示。
[![](/img/aistudio/text-mining/similarity-hash/workflow-result.png)](/img/aistudio/text-mining/similarity-hash/workflow-result.png)