### 组件介绍
**“距离变换”（Distance Transformation）**控件用来对距离矩阵进行标准化和转化。

<hr/>

- 输入：
  - dis：距离矩阵
- 输出：
  - dis：距离矩阵

<hr/>


### 页面介绍
点击**“距离变换”（Distance Transformation）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/preprocess/distance-transformation/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>标准化操作</td> 
      <td>
      进行数据标准化操作
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>转化</td> 
      <td>
      矩阵元素取值的变换
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，然后连接**“距离转换”（Distances）**控件以计算距离矩阵，通过**“距离矩阵”（Distance Matrix）**查看计算后的距离矩阵，之后连接**“距离变换”（Distance Transformation）**对距离矩阵进行转换，最后使用**“距离矩阵”（Distance Matrix）**查看转化后的矩阵。  
![workflow](/img/aistudio/preprocess/distance-transformation/workflow.png)

案例中加载 iris 数据集，案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/preprocess/distance-transformation/workflow-result.png)