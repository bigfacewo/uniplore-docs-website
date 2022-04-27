### 组件介绍
**“距离转换”（Distances）**控件根据输入数据集，计算其各行或者各列之间的距离。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - dis：距离矩阵

<hr/>


### 页面介绍
点击**“距离转换”（Distances）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/distance-matrix/param.png) ](/img/aistudio/preprocess/distance-matrix/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>距离分割</td> 
      <td>
      选择按行或列计算距离
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>度量</td> 
      <td>
      欧几里得（Eclidean）：两点间的直线距离<br/>
      曼哈顿（Manhattan）：所有属性的绝对差值之和<br/>
      余弦（Cosine）：内积空间中两个向量的夹角的余弦值<br/>
      杰卡德（Jaccard）：两个集合交集的元素个数除以并集的元素个数<br/>
      斯皮尔曼（Spearman）：映射为[0,1]区间上的秩相关系数<br/>
      绝对斯皮尔曼（Spearman absolute）：映射为[0,1]区间上的基于绝对值的秩相关系数<br/>
      皮尔森（Pearson）：映射为[0,1]区间上的绝对Pearson相关系数<br/>
      绝对皮尔斯（Pearson absolute）：映射为[0,1]区间上的基于绝对值的Pearson相关系数
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，然后连接**“距离转换”（Distances）**控件以计算距离矩阵，之后连接**“距离变换”（Distance Matrix）**控件查看距离矩阵。   
[ ![](/img/aistudio/preprocess/distance-matrix/workflow.png) ](/img/aistudio/preprocess/distance-matrix/workflow.png)

案例中加载 iris 数据集，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/preprocess/distance-matrix/workflow-result.png ](/img/aistudio/preprocess/distance-matrix/workflow-result.png)